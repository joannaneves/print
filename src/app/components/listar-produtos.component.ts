import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../app/services/produto.service';
import { Produto } from '../../main/java/com/coelhos/projeto/model/Produto.java';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
