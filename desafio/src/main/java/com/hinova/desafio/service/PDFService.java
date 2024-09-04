package com.hinova.desafio.service;

import com.hinova.desafio.model.PDFRecord;
import com.hinova.desafio.repository.PDFRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class PDFService {

    @Autowired
    private PDFRecordRepository pdfRecordRepository;

    public PDFRecord mergeAndSavePDFs(List<File> files, String email) {
        // Implement PDF merging logic using Apache PDFBox
        // Save merged PDF to a file
        String mergedPdfPath = "path_to_merged_pdf";

        PDFRecord pdfRecord = new PDFRecord();
        pdfRecord.setName("merged_file_" + UUID.randomUUID().toString() + ".pdf");
        pdfRecord.setLink(mergedPdfPath);
        pdfRecord.setCreatedAt(LocalDateTime.now());
        pdfRecord.setEmail(email);

        return pdfRecordRepository.save(pdfRecord);
    }

    public List<PDFRecord> getHistory(String email) {
        return pdfRecordRepository.findByEmail(email);
    }
}
