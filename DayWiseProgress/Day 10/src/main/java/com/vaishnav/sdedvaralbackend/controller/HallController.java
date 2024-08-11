package com.vaishnav.sdedvaralbackend.controller;


import com.vaishnav.sdedvaralbackend.model.Halls;
import com.vaishnav.sdedvaralbackend.service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/hall")
public class HallController {

    @Autowired
    private HallService hallService;

    @PostMapping("addHall")
    public ResponseEntity<Halls> addHall(@RequestBody Halls hall) {
        Halls savedHall = hallService.addHall(hall);
        return ResponseEntity.ok(savedHall);
    }

    // Get all halls
    @GetMapping("/view")
    public ResponseEntity<List<Halls>> getAllHalls() {
        List<Halls> halls = hallService.getAllHalls();
        return ResponseEntity.ok(halls);
    }

    // Get a hall by ID
    @GetMapping("/{id}")
    public ResponseEntity<Halls> getHallById(@PathVariable Long id) {
        Halls hall = hallService.getHallById(id);
        return ResponseEntity.ok(hall);
    }

    // Update a hall
    @PutMapping("updateHall/{id}")
    public ResponseEntity<Halls> updateHall(@PathVariable Long id, @RequestBody Halls hallDetails) {
        Halls updatedHall = hallService.updateHall(id, hallDetails);
        return ResponseEntity.ok(updatedHall);
    }

    // Delete a hall
    @DeleteMapping("deleteHall/{id}")
    public ResponseEntity<Void> deleteHall(@PathVariable Long id) {
        hallService.deleteHall(id);
        return ResponseEntity.noContent().build();
    }
}
