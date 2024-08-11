package com.vaishnav.sdedvaralbackend.repo;

import com.vaishnav.sdedvaralbackend.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhotoRepo extends JpaRepository<Photo, Long> {

    List<Photo> findByHallId(Long hallId);
}
