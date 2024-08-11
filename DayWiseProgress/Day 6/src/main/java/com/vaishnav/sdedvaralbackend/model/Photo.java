package com.vaishnav.sdedvaralbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Entity
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@Setter
//public class Photo {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
//    private Long id;
//
//    private String fileName;
//
//    @ManyToOne
//    @JoinColumn(name = "hall_id")
//    private Halls hall;
//}


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String fileName;

    @Lob
    @Column(length = 16777215)
    private byte[] data;

    @ManyToOne
    @JoinColumn(name = "hall_id")
    private Halls hall;
}