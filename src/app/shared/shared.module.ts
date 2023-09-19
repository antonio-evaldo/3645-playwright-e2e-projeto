import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BannerComponent } from "./banner/banner.component";
import { BotaoControleComponent } from "./botao-controle/botao-controle.component";
import { CardBuscaComponent } from "./card-busca/card-busca.component";
import { CardDepoimentoComponent } from "./card-depoimento/card-depoimento.component";
import { CardComponent } from "./card/card.component";
import { ContainerComponent } from "./container/container.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { FooterComponent } from "./footer/footer.component";
import { FormBaseComponent } from "./form-base/form-base.component";
import { FormBuscaComponent } from "./form-busca/form-busca.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { SeletorPassageiroComponent } from "./seletor-passageiro/seletor-passageiro.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { PassagemDestaqueComponent } from "./passagem-destaque/passagem-destaque.component";
import { MaterialModule } from "../core/material/material.module";
import { CompanhiasComponent } from "./form-busca/filtros-complementares/companhias/companhias.component";
import { FiltrosComplementaresComponent } from "./form-busca/filtros-complementares/filtros-complementares.component";
import { LabelComponent } from "./form-busca/filtros-complementares/label/label.component";
import { ParadasComponent } from "./form-busca/filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./form-busca/filtros-complementares/precos/precos.component";

@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    SeletorPassageiroComponent,
    ModalComponent,
    BotaoControleComponent,
    PassagemComponent,
    PassagemDestaqueComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    BannerComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    SeletorPassageiroComponent,
    ModalComponent,
    BotaoControleComponent,
    PassagemComponent,
    PassagemDestaqueComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent,
  ]
})
export class SharedModule { }
