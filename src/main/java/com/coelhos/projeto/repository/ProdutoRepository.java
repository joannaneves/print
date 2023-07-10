package com.coelhos.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coelhos.projeto.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
