<template>
<div class="cont__Pasos">
    <div class="cont__paso-1">
        <div class="Paso-1">
            <div class="titulo">
                Chayomi Redmi
            </div>
            <div class="descripcio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem quo necessitatibus, possimus
                repellendus similique sunt earum, nulla rerum fugit nemo, nisi a amet qui.
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.cont__Pasos{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    
    .cont__paso-1{
        width: 90%;
        height: 300px;
        background: white;
        border-radius: 9px;
        margin-top: 120px;
        display: flex;
        justify-content: center;
        align-items: center;

        -webkit-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
        -moz-box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);
        box-shadow: 10px 10px 11px -12px rgba(0, 0, 0, 0.21);

        .Paso-1{
            width: 90%;
            height: 90%;
            font-family: sans-serif;

            .titulo{
                font-size: 20px;
                color: #8847E2;
                font-weight: 700;
                margin-bottom: 10px;  
            }

        }
    }
}
    
</style>