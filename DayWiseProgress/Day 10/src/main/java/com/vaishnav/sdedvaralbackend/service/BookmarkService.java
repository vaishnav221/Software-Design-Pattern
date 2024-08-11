package com.vaishnav.sdedvaralbackend.service;

import com.vaishnav.sdedvaralbackend.enums.Role;
import com.vaishnav.sdedvaralbackend.model.Halls;
import com.vaishnav.sdedvaralbackend.model.User;
import com.vaishnav.sdedvaralbackend.repo.HallRepo;
import com.vaishnav.sdedvaralbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class BookmarkService {

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private HallRepo hallsRepository;

    private User getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Optional<User> user = userRepository.findByEmail(email);
        return user.orElseThrow(() -> new RuntimeException("User not found"));
    }

    public Set<Halls> getUserBookmarks() {
        User user = getAuthenticatedUser();
        return user.getBookmarkedHalls();
    }

    public Halls bookmarkHall(Long hallId) {
        User user = getAuthenticatedUser();

        if (!user.getRole().equals(Role.USER)) {
            throw new RuntimeException("Only users with role USER can bookmark halls");
        }

        Halls hall = hallsRepository.findById(hallId)
                .orElseThrow(() -> new RuntimeException("Hall not found with id: " + hallId));

        user.getBookmarkedHalls().add(hall);
        userRepository.save(user);

        return hall;
    }

    public Halls unbookmarkHall(Long hallId) {
        User user = getAuthenticatedUser();

        if (!user.getRole().equals(Role.USER)) {
            throw new RuntimeException("Only users with role USER can unbookmark halls");
        }

        Halls hall = hallsRepository.findById(hallId)
                .orElseThrow(() -> new RuntimeException("Hall not found with id: " + hallId));

        user.getBookmarkedHalls().remove(hall);
        userRepository.save(user);

        return hall;
    }
}
