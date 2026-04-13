import { Component, OnInit, Type } from '@angular/core';
import { SeleccionMapaService } from '../seleccion-mapa.service';
import { CommonModule } from '@angular/common';

// ZONAS
import { TrujilloComponent } from '../../pages/zone/trujillo/trujillo.component';
import { AlagonComponent } from '../../pages/zone/alagon/alagon.component';
import { AlburquerqueComponent } from '../../pages/zone/alburquerque/alburquerque.component';
import { AlcantaraComponent } from '../../pages/zone/alcantara/alcantara.component';
import { AmbrozComponent } from '../../pages/zone/ambroz/ambroz.component';
import { BadajozComponent } from '../../pages/zone/badajoz/badajoz.component';
import { CaceresComponent } from '../../pages/zone/caceres/caceres.component';
import { CampinaSurComponent } from '../../pages/zone/campina-sur/campina-sur.component';
import { CampoAranueloComponent } from '../../pages/zone/campo-aranuelo/campo-aranuelo.component';
import { DonBenitoComponent } from '../../pages/zone/don-benito/don-benito.component';
import { ElJerteComponent } from '../../pages/zone/el-jerte/el-jerte.component';
import { JerezDeLosCaballerosComponent } from '../../pages/zone/jerez-de-los-caballeros/jerez-de-los-caballeros.component';
import { LaSerenaComponent } from '../../pages/zone/la-serena/la-serena.component';
import { LaSiberiaComponent } from '../../pages/zone/la-siberia/la-siberia.component';
import { LaVeraComponent } from '../../pages/zone/la-vera/la-vera.component';
import { LasHurdesComponent } from '../../pages/zone/las-hurdes/las-hurdes.component';
import { LasVilluercasComponent } from '../../pages/zone/las-villuercas/las-villuercas.component';
import { LosIboresComponent } from '../../pages/zone/los-ibores/los-ibores.component';
import { MeridaComponent } from '../../pages/zone/merida/merida.component';
import { OlivenzaComponent } from '../../pages/zone/olivenza/olivenza.component';
import { SierraDeGataComponent } from '../../pages/zone/sierra-de-gata/sierra-de-gata.component';
import { TentudiaComponent } from '../../pages/zone/tentudia/tentudia.component';
import { TierraDeBarrosComponent } from '../../pages/zone/tierra-de-barros/tierra-de-barros.component';
import { ValenciaDeAlcantaraComponent } from '../../pages/zone/valencia-de-alcantara/valencia-de-alcantara.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    // TrujilloComponent,
    // AlagonComponent,
    // AlburquerqueComponent,
    // AlcantaraComponent,
    // AmbrozComponent,
    // BadajozComponent,
    // CaceresComponent,
    // CampinaSurComponent,
    // CampoAranueloComponent,
    // DonBenitoComponent,
    // ElJerteComponent,
    // JerezDeLosCaballerosComponent,
    // LaSerenaComponent,
    // LaSiberiaComponent,
    // LaVeraComponent,
    // LasHurdesComponent,
    // LasVilluercasComponent,
    // LosIboresComponent,
    // MeridaComponent,
    // OlivenzaComponent,
    // SierraDeGataComponent,
    // TentudiaComponent,
    // TierraDeBarrosComponent,
    // ValenciaDeAlcantaraComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  selectedZona: string | null = null;

  zonaComponentMap: Record<string, Type<any>> = {
    trujillo: TrujilloComponent,
    alagon: AlagonComponent,
    alburquerque: AlburquerqueComponent,
    alcantara: AlcantaraComponent,
    ambroz: AmbrozComponent,
    badajoz: BadajozComponent,
    caceres: CaceresComponent,
    campinaSur: CampinaSurComponent,
    campoAranuelo: CampoAranueloComponent,
    donBenito: DonBenitoComponent,
    elJerte: ElJerteComponent,
    jerezDeLosCaballeros: JerezDeLosCaballerosComponent,
    laSerena: LaSerenaComponent,
    laSiberia: LaSiberiaComponent,
    laVera: LaVeraComponent,
    lasHurdes: LasHurdesComponent,
    lasVilluercas: LasVilluercasComponent,
    losIbores: LosIboresComponent,
    merida: MeridaComponent,
    olivenza: OlivenzaComponent,
    sierraDeGata: SierraDeGataComponent,
    tentudia: TentudiaComponent,
    tierraDeBarros: TierraDeBarrosComponent,
    valenciaDeAlcantara: ValenciaDeAlcantaraComponent,
  };

  constructor(private mapService: SeleccionMapaService) {}

  ngOnInit(): void {
    this.mapService.selectedZona$.subscribe((zona) => {
      this.selectedZona = zona;
      console.log('Zona seleccionada:', zona);
    });
  }
}
