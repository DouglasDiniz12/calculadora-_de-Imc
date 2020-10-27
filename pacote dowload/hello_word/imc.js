
function calcular(){
    var peso =document.getElementById(`txtpeso`)
    var peso =Number(peso.value)
    var altura = document.getElementById(`txtaltura`)
    var altura= Number(altura.value)
    

    if(peso == null || altura == null){
        window.alert(`verifique os dados e tente novamente`)
    }
    else {
         var iso = altura *altura
         var imc = peso/iso
         var resul
         var fimc = document.getElementsByName('radimc')
         var tempo =``


         if(fimc[0].checked){
             tempo =`adulto`

        if(imc<18.5){
          resul =`abaixo do peso `
        }else if(imc>=18.5 && imc<=24.9){
             resul=`peso normal`
        }else if(imc >= 25 && imc<=29.9){
            resul=`Sobre peso`
        }else if(imc >=30  &&   imc<=34.9){
            resul=`Obesidade grau 1`
        }else if(imc >=35 && imc <= 40){
            resul=`Obesidade grau 2`
        }else{
            resul=`Obesidade grau 3`
            
        }
    }
        else if(fimc[1].checked){
            tempo=`idoso`

            if(imc<22){
                resul =`abaixo do peso `
              }else if(imc>=22 && imc<=27){
                   resul=`peso normal`
              }else {
                  resul=`Sobre peso`
              }


        }

        
    
       res.innerHTML=imc.toFixed(2)
        calculo.innerHTML=resul     
            
    }
}