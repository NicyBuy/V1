<template>
  <div class="Garantia">
      <p>Este producto cuenta con garantia y envio dedicado, por lo tanto es seguro comprarlo. mas informacion en: <a
        href="#">Garantia y Envios</a>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .Garantia{
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: $nicybuy__font-family;
        background: rgba(182, 255, 182, 0.418);
        p{
            width: 90%;
            height: 90%;
        }

        a{
            color: black;
            font-weight: 700;
        }
    }
</style>