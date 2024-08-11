package com.vaishnav.sdedvaralbackend.model;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class HallDetails {

    private String features;
    private Integer capacity;
    private String accessibility;

}
