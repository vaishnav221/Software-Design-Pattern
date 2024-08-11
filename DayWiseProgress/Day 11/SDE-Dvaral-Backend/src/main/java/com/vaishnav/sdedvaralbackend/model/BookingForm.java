package com.vaishnav.sdedvaralbackend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class BookingForm {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long bookingId;
    private LocalDate fromDate;
    private LocalDate endDate;
    private LocalTime fromTime;
    private LocalTime endTime;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
