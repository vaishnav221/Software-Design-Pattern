package com.vaishnav.sdedvaralbackend.repo;

import com.vaishnav.sdedvaralbackend.model.Halls;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HallRepo extends JpaRepository<Halls,Long> {
}
