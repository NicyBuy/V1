<template>
  <div class="Home">
      <div class="Banner">
          <div class="fondo"></div>
          <div class="cuadro-negro"></div>

          <div class="Tienda">
              <div class="Tienda__logo">

              </div>

              <div class="Tienda__nombre">
                  Nombre Tienda
              </div>
          </div>

          <div class="relleno"></div>
      </div>


      <div class="main">
          <div class="cont__Titulo">Titulo Generico</div>
          <div class="cont__Productos">
              <ContProductos />
          </div>

          <div class="division"></div>

          <div class="que-somos">
              <div class="que-somos__titulo">
                  Que somos?
              </div>
              <div class="que-somos__info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores ad hic praesentium ex eius
                  unde enim labore impedit, itaque non tempore sunt id. Optio adipisci nostrum maiores asperiores
                  numquam, possimus quam quia sed doloremque odit error porro quo repellendus ab id distinctio
                  laboriosam rerum autem deserunt, animi mollitia reiciendis!
                  <br><br>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores ad hic praesentium ex eius
                  unde enim labore impedit, itaque non tempore sunt id. Optio adipisci nostrum maiores asperiores
                  numquam, possimus quam quia sed doloremque odit error porro quo repellendus ab id distinctio
                  laboriosam rerum autem deserunt, animi mollitia reiciendis!
              </div>
          </div>
      </div>
  </div>
</template>


<script>
import ContProductos from '../../../components/ContProductos.vue'

export default {
    components: {
        ContProductos,
    },
}
</script>


<style lang="scss" scoped>

.Home {
    font-family: $nicybuy__font-family;
}

.Banner {
    width: 100%;
    height: 350px;
    display: grid;
    grid: 70% 15% 15% / 100%;

    .fondo {
        grid-area: 1/1/3/2;
        background: rgb(248, 201, 201);
    }

    .cuadro-negro {
        grid-area: 1/1/3/2;
        background: rgba(0, 0, 0, 0.329);
    }

    .Tienda {
        grid-area: 2/1/4/2;
        display: flex;
        align-items: center;
        z-index: 1;

        .Tienda__logo {
            border-radius: 100%;
            background: rgb(155, 155, 199);
            border: solid rgb(78, 78, 139) 5px;
            height: 65px;
            width: 65px;
            margin-left: 10px;
        }

        .Tienda__nombre {
            transform: translateY(-10px);
            margin-left: 10px;
            font-size: $mobile__big;
            font-weight: 700;
            color: white;
        }
    }

    .relleno {
        grid-area: 3/1/4/2;
        background: rgb(255, 106, 131);
        z-index: 0;
    }
}

.main {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgb(255, 106, 131);

    .cont__Titulo{
        width: 90%;
        height: 120px;
        display: flex;
        align-items: center;
        font-size: $mobile__big;
        font-weight: 700;
        color: white;
    }
}

.division {
    width: 90%;
    height: 1px;
    background: rgba(0, 0, 0, 0.164);
    margin-top: 30px;
    margin-bottom: 30px;
}

.que-somos{
    width: 90%;
    color: white;

    .que-somos__titulo{
        font-size: $mobile__big;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
    }
}

</style>