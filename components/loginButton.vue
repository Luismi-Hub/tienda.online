<template>
  <div>
    <button
      id="inicioLogin"
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Login
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document" id="modalLinks">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Select an option</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <button v-if="!authenticated" @click="login">Google</button>
            <br />
            o
            <br />

            <div class="modal-body-form">
              <label for="correo">Email</label>
              <input type="text" id="correo" v-model="email" /><br />
              <label for="contraseña">Contraseña</label>
              <input type="password" id="contraseña" v-model="password" />
              <br />
              <button
                class="modal-body-form-button"
                v-if="!authenticated"
                @click="loginMail"
              >
                Iniciar sesion
              </button>
              <p>admin:ayalaAdmin999@gmail.com</p>
              <p>pass:ayala2021</p>
            </div>

            <br />
          </div>
          <div class="modal-footer">
            <button
              id="botonCerrar"
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="authenticated">
      <a>Hi {{ firstName }}!</a>
      <button @click="logout" type="button" class="btn btn-primary" style="width:80px;align-text:center">
        Logout
      </button>
    </div>
  </div>
</template>
<script lang="js">

import Firebase from "./db"
import Vue from "vue"



  export default  {
   name: 'loginB',
    props: [],

    data () {
      return {

         user: {
          loggedIn: false,
          data: {}
        },
        email:"",
        password:"",
        admin:"",
        pass:""

      }
    },

      mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
            document.getElementById("inicioLogin").style.display="none"
              document.getElementById("botonCerrar").click()
              console.log("hay usuario!!")
              
          
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
                 document.getElementById("inicioLogin").style.display="block"
        }
      })
    },


   
    methods: {
      login() {
        Firebase.login();
  
      },
      logout() {
        Firebase.logout();
         document.getElementById("adminButton").style.display="none"
               this.$emit("carritoAcero")

        
  
      },

      loginMail(){
 
          this.admin=document.getElementById("correo").value 
          this.pass=document.getElementById("contraseña").value 


        if(this.admin==="ayalaAdmin999@gmail.com" & this.pass=== "ayala2021"){

           Vue.notify({
                  group: 'foo',
                  title: 'Now you are logged as Admin',

                })

       this.$emit("showAdmin")
       document.getElementById("botonCerrar").click()

        }
      Firebase.signUpWithEmailPassword(this.email,this.password)
      }

      
   
    },


   computed: {
  
  

        authenticated(){
          return this.user.loggedIn
        },
        firstName(){
          if (this.user.data.displayName) {
            return this.user.data.displayName.split(' ')[0]
          }
          return null
        }
    },
}


</script>


