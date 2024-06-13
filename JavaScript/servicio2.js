let lista = [];
    lista.push({
        titulo: "SERVICIO",
        list: "LAVAR Y PEINAR",
        list1: "LAVAR Y CORTAR",
        list2: "CORTE CABALLERO",
        list3: "COLOR",
        list4: "COLOR Y PEINAR",
        list5: "LAVAR COLOR Y CORTE",  
        list6: "LAVAR COLOR CORTE Y PEINAR",
        list7: "LAVAR PEINAR Y MOLDEADO",
        list8: "LAVAR CORTE MOLDEADO Y PEINAR",
        list9: "CORTE NIÑO",
        list10: "LAVAR MECHAS Y PEINAR",
        list11: "LAVAR MECHAS CORTE Y PEINAR",
        list12: "RECOGIDO",
        list13: "SEMIRECOGIDO",
        list14: "ALISADO QUERATINA",
        list15: "ALISADO ACIDO HIALURONICO", 
        list16: "PERMANENTE RIZADO",
      });

      lista.push({
        titulo: "PRECIO",
        list: "25,00€",
        list1: "25,00€",
        list2: "18,00€",
        list3: "25,00€",
        list4: "35,00€",
        list5: "40,00€",
        list6: "50,00€",
        list7: "90,00€",
        list8: "110,00€",
        list9: "15,00€",
        list10: "60,00€",
        list11: "80,00€",
        list12: "50,00€",
        list13: "40,00€",
        list14: "200,00€",
        list15: "160,00€",
        list16: "130,00€",
      });

      lista.push({
        titulo: "TIEMPO-APROX",
        list: "2 horas",
        list1: "1 hora",
        list2: "40 minutos",
        list3: "1 hora",
        list4: "2 horas",
        list5: "2 horas y media",
        list6: "2 horas y media",
        list7: "2 horas y media",
        list8: "3 horas",
        list9: "40 minutos",
        list10: "2 horas y media",
        list11: "3 horas",
        list12: "50 minutos",
        list13: "40 minutos",
        list14: "3 horas y media",
        list15: "3 horas",
        list16: "2 horas y media",
      });
      
    const miServicio = document.getElementById("miServicio");
      let aux = "";
      for (let i = 0; i < lista.length; i++) {
        tipo = lista[i];
        aux += `<ol class="tabla"> `;
        aux += ` <h3>${tipo.titulo}</h3> `;
        aux += `<li>${tipo.list}</li> `;
        aux += `<li>${tipo.list1}</li> `;
        aux += `<li>${tipo.list2}</li> `;
        aux += `<li>${tipo.list3}</li> `;
        aux += `<li>${tipo.list4}</li> `;
        aux += `<li>${tipo.list5}</li> `;
        aux += `<li>${tipo.list6}</li> `;
        aux += `<li>${tipo.list7}</li> `;
        aux += `<li>${tipo.list8}</li> `;
        aux += `<li>${tipo.list9}</li> `;
        aux += `<li>${tipo.list10}</li> `;
        aux += `<li>${tipo.list11}</li> `;
        aux += `<li>${tipo.list12}</li> `;
        aux += `<li>${tipo.list13}</li> `;
        aux += `<li>${tipo.list14}</li> `;
        aux += `<li>${tipo.list15}</li> `;
        aux += `<li>${tipo.list16}</li> `;
        aux += ` </ol> `;
      }

      miServicio.innerHTML = aux; 