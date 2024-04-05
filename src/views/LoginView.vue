<template>
  <div class="main">
    <form ref="form" class="form" id="loginForm" @submit="validate">
      <div class="input">
        <label>E-mail</label>
        <input required type="email" placeholder="E-Mail" />
      </div>
      <div class="input">
        <label>Password</label>
        <input required type="password" placeholder="Password" />
      </div>
      <button class="submit-button" type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Components

export default defineComponent({
  name: "LoginView",

  components: {},

  data: () => ({
    mail: "",
    mailRules: [
      (v: string) => {
        return !!v || "L'email est requis";
      },
      (v: string) => {
        return /.+@.+\..+/.test(v) || "L'email doit être valide";
      },
    ],
    password: "",
  }),

  computed: {},

  methods: {
    validate(e: Event) {
      e.preventDefault();
      const form = document.querySelector("#loginForm");
      const username = (
        form?.querySelector("input[type=email]") as HTMLInputElement
      ).value;
      const password = (
        form?.querySelector("input[type=password]") as HTMLInputElement
      ).value;
      this.$axios
        .post(
          "http://localhost:8080/auth/login",
          {
            username,
            password,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "POST",
            },
          }
        )
        .then((e) => {
          console.log(e);
          document.cookie = `token=${e.data.token};expires=${new Date(
            Date.now() + 1000 * 60 * 60 * 2
          ).toUTCString()}`;
          window.location.href = "/home";
        });
      // authenticate({
      //   ldapOpts: {
      //     url: "ldap://cybersec.adds:389",
      //     userDn: "uid=teo.moca_adm,ou=IT,ou=CYBERSEC,dc=cybersec,dc=adds",
      //     userPassword: "PSWmontlouis76000$",
      //     userSearchBase: "ou=USERS,ou=CYBERSEC,dc=cybersec,dc=adds",
      //     usernameAttribute: "uid",
      //     username: "teo.moca_adm",
      //     attributes: ["dn", "sn", "cn"],
      //   },
      // }).then((e) => console.log("result", e));
      // this.$axios
      //   .post(
      //     `http://${location.hostname}:8080/auth/login`,
      //     {
      //       mail: this.mail.toLowerCase(),
      //       password: this.password,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Bearer ${this.$cookies.get("token")}`,
      //       },
      //     }
      //   )
      //   .then((e) => {
      //     console.log(e);
      //     document.cookie = `token=${e.data.token};expires=${new Date(
      //       Date.now() + 1000 * 60 * 60 * 2
      //     ).toUTCString()}`;
      //     document.cookie = `lastname=${
      //       e.data.data.lastname
      //     };expires=${new Date(Date.now() + 1000 * 60 * 60 * 2).toUTCString()}`;
      //     document.cookie = `firstname=${
      //       e.data.data.firstname
      //     };expires=${new Date(Date.now() + 1000 * 60 * 60 * 2).toUTCString()}`;
      //     document.cookie = `userId=${e.data.data.id};expires=${new Date(
      //       Date.now() + 1000 * 60 * 60 * 2
      //     ).toUTCString()}`;

      //     window.location.href = "/home";
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //     window.alert(e.response.data.message);
      //   });
    },
    clearmail() {
      this.mail = "";
    },
    clearPassword() {
      this.password = "";
    },
  },
});
</script>

<style scoped>
.main {
  display: grid;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}

.form {
  display: grid;
  align-items: center;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 20vw;
  gap: 20px;
}

.input {
  display: grid;
  text-align: left;
}

.submit-button {
  background: #8aabff;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}
</style>
