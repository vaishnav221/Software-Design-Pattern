package com.vaishnav.sdedvaralbackend.model;


import com.vaishnav.sdedvaralbackend.enums.TokenType;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String token;

    @Enumerated(EnumType.STRING)
    private TokenType tokenType  =TokenType.BEARER;

    private boolean revoked;
    private boolean expired;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}