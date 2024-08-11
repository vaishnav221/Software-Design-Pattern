package com.vaishnav.sdedvaralbackend.service;

import com.vaishnav.sdedvaralbackend.enums.Role;
import com.vaishnav.sdedvaralbackend.model.Halls;
import com.vaishnav.sdedvaralbackend.model.User;
import com.vaishnav.sdedvaralbackend.repo.HallRepo;
import com.vaishnav.sdedvaralbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HallService {

    @Autowired
    private HallRepo hallRepository;
    @Autowired
    private UserRepo userRepository;

    public Halls addHall(Halls hall) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        Optional<User> user = userRepository.findByEmail(email);
        User foundUser = user.orElseThrow(() -> new UsernameNotFoundException("User not found"));


        if (foundUser.getRole() != Role.MANAGER) {
            throw new RuntimeException("Only managers can add halls.");
        }

        hall.setUser(foundUser);

        return hallRepository.save(hall);
    }


    public List<Halls> getAllHalls() {
        return hallRepository.findAll();
    }


    public Halls getHallById(Long id) {
        return hallRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hall not found with id: " + id));
    }


    public Halls updateHall(Long id, Halls hallDetails) {
        Halls hall = getHallById(id);

        hall.setHallName(hallDetails.getHallName());
        hall.setLocation(hallDetails.getLocation());
        hall.setPrice(hallDetails.getPrice());
        hall.setDescription(hallDetails.getDescription());
        hall.setRating(hallDetails.getRating());

        return hallRepository.save(hall);
    }


    public void deleteHall(Long id) {
//        Halls hall = getHallById(id);
//        hallRepository.delete(hall);
        hallRepository.deleteById(id);
    }

}
