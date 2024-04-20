import Cookies from "js.cookie";

const SERVER_URL = "https://ufoodapi.herokuapp.com";

export const authActions = {
  async signUp({ commit }, { name, email, password }) {
    try {
      const formData = new URLSearchParams();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch(`${SERVER_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      return await response.json();
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    }
  },
  async login({ commit }, { email, password }) {
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch(`${SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const data = await response.json();
      Cookies.set("connectionToken", data.token);
      const { email: userEmail, name: name, id: id, rating: rating } = data;
      console.log("data: ", data);
      console.log("email: ", userEmail);
      console.log("name: ", name);
      console.log("id: ", id);
      commit("SET_LOGGED_IN_USER", {
        email: userEmail,
        name: name,
        id: id,
        rating: rating,
      });
      return data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },
  async logout({ commit }) {
    try {
      await fetch(`${SERVER_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      commit("SET_LOGGED_IN_USER", null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  },
};
