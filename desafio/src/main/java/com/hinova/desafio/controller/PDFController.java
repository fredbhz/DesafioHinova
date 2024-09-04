package com.hinova.desafio.controller;

import com.hinova.desafio.model.PDFRecord;
import com.hinova.desafio.service.PDFService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.List;

@RestController
@RequestMapping("/api/pdf")
public class PDFController {

    @Autowired
    private PDFService pdfService;

    @PostMapping("/merge")
    public PDFRecord mergePDFs(@RequestParam String email, @RequestParam List<File> files) {
        if (email == null || email.isEmpty()) {
            throw new IllegalArgumentException("Email is required");
        }
        return pdfService.mergeAndSavePDFs(files, email);
    }

    @GetMapping("/history")
    public List<PDFRecord> getHistory(@RequestParam String email) {
        return pdfService.getHistory(email);
    }
}
