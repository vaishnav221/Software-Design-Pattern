package com.vaishnav.sdedvaralbackend.repo;

import com.vaishnav.sdedvaralbackend.model.BookingForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingFormRepo extends JpaRepository<BookingForm, Long> {
}
