package com.vaishnav.sdedvaralbackend.controller;

import com.vaishnav.sdedvaralbackend.model.BookingForm;
import com.vaishnav.sdedvaralbackend.service.BookingFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/form")
public class BookingFormController {

    @Autowired
    private BookingFormService bookingFormService;

    // Add a new booking
    @PostMapping("addForm")
    public ResponseEntity<?> addBooking(@RequestBody BookingForm bookingForm) {
        BookingForm savedBooking = bookingFormService.addBookingForm(bookingForm);
        return ResponseEntity.ok(savedBooking);
    }

    // Get all bookings
    @GetMapping("/show")
    public ResponseEntity<List<BookingForm>> getAllBookings() {
        List<BookingForm> bookings = bookingFormService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    // Get a booking by ID
    @GetMapping("/{id}")
    public ResponseEntity<BookingForm> getBookingById(@PathVariable Long id) {
        BookingForm bookingForm = bookingFormService.getBookingById(id);
        return ResponseEntity.ok(bookingForm);
    }

    // Update a booking
    @PutMapping("updateForm/{id}")
    public ResponseEntity<BookingForm> updateBooking(@PathVariable Long id, @RequestBody BookingForm bookingFormDetails) {
        BookingForm updatedBooking = bookingFormService.updateBooking(id, bookingFormDetails);
        return ResponseEntity.ok(updatedBooking);
    }

    // Delete a booking
    @DeleteMapping("deleteForm/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingFormService.deleteBooking(id);
        return ResponseEntity.noContent().build();
    }
}
