package com.vaishnav.sdedvaralbackend.service;

import com.vaishnav.sdedvaralbackend.model.Halls;
import com.vaishnav.sdedvaralbackend.model.Photo;
import com.vaishnav.sdedvaralbackend.repo.HallRepo;
import com.vaishnav.sdedvaralbackend.repo.PhotoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class PhotoService {

    @Autowired
    private PhotoRepo photoRepository;

    @Autowired
    private HallRepo hallsRepository;


    public Photo addPhoto(Long hallId, MultipartFile file) throws IOException {
        Halls hall = hallsRepository.findById(hallId)
                .orElseThrow(() -> new RuntimeException("Hall not found with id: " + hallId));

        String fileName = generateFileName(hallId, file.getOriginalFilename());

        Photo photo = new Photo();
        photo.setFileName(fileName);
        photo.setData(file.getBytes());
        photo.setHall(hall);

        return photoRepository.save(photo);
    }

    public List<Photo> getPhotosByHallId(Long hallId) {
        return photoRepository.findByHallId(hallId);
    }


    public Photo getPhotoById(Long id) {
        return photoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Photo not found with id: " + id));
    }


    public Photo updatePhoto(Long id, MultipartFile file) throws IOException {
        Photo photo = getPhotoById(id);
        photo.setFileName(generateFileName(photo.getHall().getId(), file.getOriginalFilename()));
        photo.setData(file.getBytes());

        return photoRepository.save(photo);
    }


    public void deletePhoto(Long id) {
        Photo photo = getPhotoById(id);
        photoRepository.delete(photo);
    }

    private String generateFileName(Long hallId, String originalFilename) {
        String fileExtension = getFileExtension(originalFilename);
        return String.format("hall_%d_%s.%s", hallId,
                new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()), fileExtension);
    }

    private String getFileExtension(String fileName) {
        int lastDotIndex = fileName.lastIndexOf('.');
        return (lastDotIndex == -1) ? "" : fileName.substring(lastDotIndex + 1);
    }
}
