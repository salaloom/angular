import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/registers.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AngularFireAuth]

})
export class RegisterComponent implements OnInit {

      //1. Creer une classe user avec les champs mails et passwords
          user: User = new User();

      //2. creer un formulaire dans le template avec 2 input mail et pass et un bouton sinsrcrire

            constructor(
              public afAuth : AngularFireAuth,
              private location: Location
              ) { }

              ngOnInit() { }

    // 3.Au clic sur le bouton s'inscrire, on lance la fonction register() et on inscrit l'utilisateur dans fire base avec l'email et le password
    
  
                 register() {
        //Créer un utiilisateur
                  this.afAuth.auth.createUserWithEmailAndPassword(this.user.mail, this.user.pass).then(success => this.location.back()
                   );
                }

              



















}
