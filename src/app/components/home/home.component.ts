import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor ( private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.loading = false;
          // console.log(data);
          this.nuevasCanciones = data;
        }, ( errorServicio ) => {
          this.loading = false;
          this.error = true;
          console.log(errorServicio.error.error.message);
          this.mensajeError = errorServicio.error.error.message;
        });
  }

}
