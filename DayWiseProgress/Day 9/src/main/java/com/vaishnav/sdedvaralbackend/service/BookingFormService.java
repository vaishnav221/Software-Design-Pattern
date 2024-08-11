package com.vaishnav.sdedvaralbackend.service;

import com.vaishnav.sdedvaralbackend.enums.Role;
import com.vaishnav.sdedvaralbackend.model.BookingForm;
import com.vaishnav.sdedvaralbackend.model.User;
import com.vaishnav.sdedvaralbackend.repo.BookingFormRepo;
import com.vaishnav.sdedvaralbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BookingFormService {

    @Autowired
    private BookingFormRepo bookingFormRepository;

    @Autowired
    private UserRepo userRepository;


    public BookingForm addBookingForm(BookingForm bookingForm) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        Optional<User> user = userRepository.findByEmail(email);
        User foundUser = user.orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (foundUser.getRole() != Role.USER) {
            throw new RuntimeException("Only users with role USER can book halls.");
        }

        // Associate the booking form with the current user
        bookingForm.setUser(foundUser);

        return bookingFormRepository.save(bookingForm);
    }


    public List<BookingForm> getAllBookings() {
        return bookingFormRepository.findAll();
    }


    public BookingForm getBookingById(Long id) {
        return bookingFormRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + id));
    }


    public BookingForm updateBooking(Long id, BookingForm bookingFormDetails) {
        BookingForm bookingForm = getBookingById(id);

        bookingForm.setFromDate(bookingFormDetails.getFromDate());
        bookingForm.setEndDate(bookingFormDetails.getEndDate());
        bookingForm.setFromTime(bookingFormDetails.getFromTime());
        bookingForm.setEndTime(bookingFormDetails.getEndTime());

        return bookingFormRepository.save(bookingForm);
    }


    public void deleteBooking(Long id) {
        BookingForm bookingForm = getBookingById(id);
        bookingFormRepository.delete(bookingForm);
    }

}
