package com.vaishnav.sdedvaralbackend.controller;

import com.vaishnav.sdedvaralbackend.model.Photo;
import com.vaishnav.sdedvaralbackend.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/photos")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @PostMapping("/hall/{hallId}/upload")
    public ResponseEntity<Photo> uploadPhoto(@PathVariable Long hallId, @RequestParam("file") MultipartFile file) {
        try {
            Photo savedPhoto = photoService.addPhoto(hallId, file);
            return ResponseEntity.ok(savedPhoto);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/hall/{hallId}")
    public ResponseEntity<List<Photo>> getPhotosByHallId(@PathVariable Long hallId) {
        List<Photo> photos = photoService.getPhotosByHallId(hallId);
        return ResponseEntity.ok(photos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getPhotoById(@PathVariable Long id) {
        Photo photo = photoService.getPhotoById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "image/jpeg"); // Adjust based on file type
        return new ResponseEntity<>(photo.getData(), headers, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Photo> updatePhoto(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        try {
            Photo updatedPhoto = photoService.updatePhoto(id, file);
            return ResponseEntity.ok(updatedPhoto);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePhoto(@PathVariable Long id) {
        photoService.deletePhoto(id);
        return ResponseEntity.noContent().build();
    }
}
