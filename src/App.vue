<script setup>
import { RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import { isLoading } from "./router";
</script>

<template>
  <Header />

  <template v-if="!isLoading">
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </template>

  <template v-else>
    <div class="page-loader">
      <span class="spinner"></span>
    </div>
  </template>

  <Footer />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-loader {
  background: #FFFFFF;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #616161;
  border-top-color: #FDFE00;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>