package com.hinova.desafio.repository;

import com.hinova.desafio.model.PDFRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PDFRecordRepository extends JpaRepository<PDFRecord, Long> {
    List<PDFRecord> findByEmail(String email);
}
