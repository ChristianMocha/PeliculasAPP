import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] =[];

  constructor( private storage: Storage, private toastCtrl: ToastController) { 

    this.cargarFavoritos();
  }

  async presentToast(message: string ){
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  guardarPelicula( pelicula: PeliculaDetalle ){

    let existe = false;
    let mensaje = '';

    for (let peli of this.peliculas) {
      if( peli.id === pelicula.id){
        existe = true;
        break;
      }
       
    }

    if( existe){
      this.peliculas  =this.peliculas.filter( peli => peli.id !== pelicula.id);
      mensaje = 'Remove of favorite';
    }else{
      this.peliculas.push( pelicula );
      mensaje = 'Add to favorite';
    }



    this.presentToast(mensaje);
    // this.peliculas.push(pelicula);
    this.storage.set('peliculas', this.peliculas);

    return !existe;
  }

  async cargarFavoritos(){
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula(id){

    await this.cargarFavoritos();
    const existe  = this.peliculas.find(peli => peli.id === id);
    return (existe)? true: false;
  }
}
