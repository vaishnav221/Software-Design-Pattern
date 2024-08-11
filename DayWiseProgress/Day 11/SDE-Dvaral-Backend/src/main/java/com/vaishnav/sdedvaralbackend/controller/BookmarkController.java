package com.vaishnav.sdedvaralbackend.controller;

import com.vaishnav.sdedvaralbackend.model.Halls;
import com.vaishnav.sdedvaralbackend.service.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/bookmarks")
public class BookmarkController {

    @Autowired
    private BookmarkService bookmarkService;

    @GetMapping
    public ResponseEntity<Set<Halls>> getUserBookmarks() {
        Set<Halls> bookmarks = bookmarkService.getUserBookmarks();
        return ResponseEntity.ok(bookmarks);
    }

    @PostMapping("/{hallId}")
    public ResponseEntity<Halls> bookmarkHall(@PathVariable Long hallId) {
        Halls bookmarkedHall = bookmarkService.bookmarkHall(hallId);
        return ResponseEntity.ok(bookmarkedHall);
    }

    @DeleteMapping("/{hallId}")
    public ResponseEntity<Halls> unbookmarkHall(@PathVariable Long hallId) {
        Halls unbookmarkedHall = bookmarkService.unbookmarkHall(hallId);
        return ResponseEntity.ok(unbookmarkedHall);
    }
}
