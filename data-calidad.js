/* ============================================================
   DATA · KIT CULTIVA — CALIDAD (+ TAC) · N2–N4 + TAC
   Reconstruido (21/06/2026) desde "Kit Cultiva por Perfil v5.1.xlsx"
   — fichas por perfil (hojas 13–17) + hoja "Resumen rituales — multiárea".
   Se inyecta sobre las estructuras creadas en data-cosecha.js.
   Regla del área: opera por TRANSMISIÓN CULTURAL (rotación 70-80%);
   los rituales premian al mentor/base que enseña, no al rotativo, y
   enmarcan el desarrollo en la FRICCIÓN con operaciones.
   ============================================================ */

Object.assign(window.PROFILES, {

  /* ---------------------------------------------------------- N1 (clonado de Cosecha) */
  "cal-n1":   {
    "id": "cal-n1",
    "area": "calidad",
    "level": "N1",
    "role": "Sub-gerente de Calidad",
    "sub": "Garante del sistema",
    "context": "1 persona en el piloto. Garante del sistema. Modela Cultiva hacia el Jefe y destraba temas estructurales. Si no lo hace visiblemente, los niveles abajo no lo van a hacer.",
    "rituals": [
      {
        "id": "acompanamiento-1-1",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "1 vez al mes",
        "purpose": "Desarrollar a un miembro de tu equipo mediante observación, pregunta y acuerdo concreto (modelo CIA integrado: Comportamiento o Problema · Impacto · Acuerdo).",
        "steps": [
          {
            "k": "Observo",
            "t": "identifico una conducta observada para corregir o potenciar."
          },
          {
            "k": "Me acerco",
            "t": "con tono neutro, sin señal de corrección."
          },
          {
            "k": "Comparto",
            "t": "\"Observé que [mencionar comportamiento o problema]. Esto generó [mencionar impacto]. ¿Qué acuerdo tomamos para corregirlo / potenciarlo?\""
          },
          {
            "k": "Escucho",
            "t": "2 minutos sin interrumpir."
          },
          {
            "k": "Impulso",
            "t": "pregunto qué podría hacer para mejorar o llevar esa fortaleza al siguiente nivel."
          },
          {
            "k": "Acordamos",
            "t": "definimos una acción concreta para poner en práctica."
          },
          {
            "k": "Cierro",
            "t": "con reconocimiento por el compromiso."
          },
          {
            "k": "Vuelvo",
            "t": "cuando se haya cumplido la fecha de seguimiento: \"¿Cómo te resultó lo que acordamos?\""
          }
        ],
        "phrases": [
          "\"Vi [comportamiento o problema]. Eso generó [impacto]. ¿Qué acuerdo tomamos?\"",
          "“Lo que mejor vi este mes fue [comportamiento], que generó [impacto]. Quiero que sepas que lo valoro.”",
          "\"No vine a corregirte, vine a alinearnos. ¿Qué necesitas de mí?\"",
          "\"¿Qué crees que pasó? ¿Qué cambiarías tú?\"",
          "\"¿Me repites qué acordamos para asegurarnos de que quedó claro?\"",
          "\"Antes de cerrar quiero reconocer que [conducta positiva]. Eso me da confianza.\""
        ],
        "no": [
          "Hablar de personas, no de hechos observados.",
          "Cerrar sin un acuerdo concreto.",
          "Saltarse el reconocimiento positivo al final.",
          "Convertirlo en monólogo de instrucciones.",
          "No volver a preguntar sobre el acuerdo en los días siguientes.",
          "Generalizar (\"siempre haces…\") en vez de nombrar un hecho concreto."
        ],
        "context": {
          "freq": "1 vez al mes",
          "when": "30-45 min",
          "place": "Momento no operativo con el Jefe de Calidad"
        },
        "registro": {
          "soporte": "Tarjeta Acompañamiento 1 a 1",
          "fields": [
            {
              "k": "persona",
              "l": "Persona",
              "t": "person"
            },
            {
              "k": "situacion",
              "l": "Situación observada",
              "t": "area"
            },
            {
              "k": "conducta",
              "l": "Conducta",
              "t": "area"
            },
            {
              "k": "impacto",
              "l": "Impacto",
              "t": "area"
            },
            {
              "k": "pregunta",
              "l": "Pregunta clave",
              "t": "area"
            },
            {
              "k": "acuerdo",
              "l": "Acuerdo",
              "t": "area"
            },
            {
              "k": "fecha",
              "l": "Fecha de seguimiento",
              "t": "date"
            }
          ]
        }
      },
      {
        "id": "caminata-de-liderazgo",
        "kind": "full",
        "dimension": "lidera",
        "icon": "footprints",
        "title": "Caminata de Liderazgo",
        "freq": "1 visita a campo y planta trimestralmente",
        "purpose": "Hacer visible a la sub-gerencia en terreno",
        "context": {
          "freq": "1 visita a campo y planta trimestralmente",
          "when": "En el lote o en la línea, nunca en oficina",
          "place": "Sub-gerente de Calidad + Jefe de Calidad / Coordinador de Calidad / Supervisor de Calidad / Técnico TAC"
        },
        "steps": [
          {
            "k": "Coordino",
            "t": "la visita y llevo 2-3 temas de fricción con operaciones para escuchar."
          },
          {
            "k": "Llego",
            "t": ", saludo por nombre y observo SIN tomar partido en el momento."
          },
          {
            "k": "Pregunto",
            "t": "sobre la fricción concreta con operaciones."
          },
          {
            "k": "Escucho",
            "t": "sin resolver en el momento."
          },
          {
            "k": "Cierro",
            "t": "con una promesa cumplible y anuncio que volveré."
          }
        ],
        "phrases": [
          "\"Vine a ver de cómo va todo, cómo se sienten, no a revisar muestreos.\"",
          "\"Que sostengan la calidad sin escalar el conflicto es justo lo que vengo a reconocer.\"",
          "\"Esto que me cuentas lo reviso y te traigo respuesta esta semana.\""
        ],
        "no": [
          "Convertirla en inspección de calidad o auditoría.",
          "Tomar partido en la fricción con operaciones en el momento.",
          "Visitar solo planta y saltarse el campo (o viceversa)."
        ],
        "registro": {
          "soporte": "Registro de visita en terreno",
          "fields": [
            {
              "k": "lugar",
              "l": "Lugar",
              "t": "text"
            },
            {
              "k": "conductas",
              "l": "Conductas observadas",
              "t": "area"
            },
            {
              "k": "temas",
              "l": "Temas levantados",
              "t": "area"
            },
            {
              "k": "responsables",
              "l": "Responsables",
              "t": "area"
            }
          ]
        }
      },
      {
        "id": "espacio-de-confianza",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Semanal",
        "purpose": "Recoger las inquietudes del equipo antes de que se conviertan en problemas y darles seguimiento.",
        "steps": [
          {
            "k": "Abro",
            "t": "con una pregunta honesta: \"¿Cómo van? ¿Algo que quieran contarme o que necesiten?\""
          },
          {
            "k": "Espero",
            "t": "20-30 segundos en silencio; la gente no responde de inmediato."
          },
          {
            "k": "Escucho",
            "t": "sin interrumpir el tema que traen."
          },
          {
            "k": "Explico el porqué",
            "t": "comparto el contexto o la información que ayude a entender el tema."
          },
          {
            "k": "Decido",
            "t": "con qué recurso darle solución a cada tema: lo resuelvo yo, lo veo con un par o busco a quien pueda ayudar."
          },
          {
            "k": "Doy cierre",
            "t": "al día siguiente doy respuesta a las consultas pendientes."
          }
        ],
        "phrases": [
          "\"¿Algo que quieran conversar antes de empezar?\"",
          "\"Ese tema lo veo yo esta semana. Vuelvo con respuesta.\"",
          "\"Eso es estructural — lo llevo a la mesa que corresponde. Te confirmo el jueves.\"",
          "\"La semana pasada [nombre] planteó [tema]. Esto es lo que se decidió.\""
        ],
        "no": [
          "Prometer a tu equipo lo que no puedes cumplir.",
          "No dejar sin respuesta a quien habló contigo."
        ],
        "context": {
          "freq": "Semanal",
          "when": "En espacios ya programados o existentes con tus reportes directos"
        },
        "registro": {
          "fields": [
            {
              "k": "contexto",
              "l": "Contexto",
              "t": "area"
            },
            {
              "k": "tipo",
              "l": "Tipo",
              "t": "sel",
              "o": [
                "Operativo",
                "Cultural"
              ]
            },
            {
              "k": "urgencia",
              "l": "Urgencia",
              "t": "sel",
              "o": [
                "Hoy",
                "Esta semana"
              ]
            }
          ],
          "soporte": "Registro vía app"
        }
      },
      {
        "id": "revisar-escaladas-diarias",
        "kind": "escaladas",
        "dimension": "escucha",
        "icon": "inbox",
        "title": "Revisión de escaladas",
        "freq": "Diario",
        "purpose": "Detectar lo que se repite: dar destino institucional a lo que el Jefe de Calidad no puede resolver.",
        "from": "tu equipo",
        "reminder": "Revisa y dale destino a lo que tu equipo escaló.",
        "context": {
          "when": "Al cierre del día"
        },
        "steps": [
          {
            "k": null,
            "t": "el panel consolidado — busco patrones, no el detalle de cada tema."
          },
          {
            "k": null,
            "t": "qué temas estructurales requieren mi intervención o una decisión institucional."
          },
          {
            "k": null,
            "t": "a lo estructural: resuelvo, derivo a RRLL/Ops o marco para seguimiento con fecha."
          },
          {
            "k": null,
            "t": "de vuelta a mi equipo mi decisión para que el loop cierre hacia abajo."
          }
        ],
        "phrases": [
          "\"Este patrón no es de fundo/planta — es sistémico. Lo trabajo yo.\"",
          "\"Lo derivo a RRLL con instrucción clara y fecha.\"",
          "\"Comunico al N2 mi decisión para que llegue al equipo.\""
        ],
        "no": [
          "Revisar el panel como si fuera un reporte operativo.",
          "Dejar temas estructurales sin dueño ni fecha.",
          "No cerrar el loop hacia abajo con la decisión tomada."
        ]
      },
      {
        "id": "reconocimiento-sincero",
        "kind": "full",
        "dimension": "valora",
        "icon": "award",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez al mes",
        "purpose": "Hacer visible quién está modelando Cultiva de manera oportuna.",
        "steps": [
          {
            "k": "Observo",
            "t": "conscientemente a la persona del equipo que destaquen en conducta o rendimiento durante el período."
          },
          {
            "k": "Anoto",
            "t": "la conducta específica y el impacto que tuvo para el equipo o la operación."
          },
          {
            "k": "Nombro",
            "t": "en el momento oportuno: \"[Nombre de la persona a reconocer], te felicito por [mencionar conducta], eso nos ayudó en [mencionar impacto].\""
          }
        ],
        "phrases": [
          "\"Antes de seguir, quiero mencionar a [nombre]. Vi [conducta específica] cuando [situación]. Eso sumó mucho en [impacto].\"",
          "\"Si tuviera que poner un ejemplo de Cultiva en acción, sería [nombre] cuando [situación].\""
        ],
        "no": [
          "Reconocimiento vago: \"buen trabajo\" o \"todos lo hicieron bien\".",
          "Reconocer siempre a los mismos.",
          "Hacerlo en privado cuando merece ser público (o viceversa).",
          "Hacerlo con excesiva frecuencia — pierde sinceridad."
        ],
        "note": "Reconocimiento opcional: También puedo reconocer al equipo de mis reportes (coordinado con jefe directo)",
        "context": {
          "freq": "1 vez al mes",
          "when": "3 min",
          "place": "Reunión de equipo o mensaje grupal"
        },
        "registro": {
          "soporte": "Registro",
          "fields": [
            {
              "k": "reconozco",
              "l": "Reconozco a",
              "t": "reportes",
              "req": true
            },
            {
              "k": "pilar",
              "l": "Pilar que reconozco",
              "t": "sel",
              "req": true,
              "o": [
                "Excelencia: Elevó el estándar de su trabajo",
                "Eficiencia: Simplificó y ejecutó con agilidad",
                "Accountability: Se hizo cargo de principio a fin",
                "Integridad: Actuó con transparencia y cuidó a las personas"
              ]
            }
          ]
        }
      }
    ]
  },


  /* ---------------------------------------------------------- N2 */
  "cal-n2": {
    "id": "cal-n2",
    "area": "calidad",
    "level": "N2",
    "role": "Jefe de Calidad",
    "sub": "Sostiene la cultura por transmisión",
    "context": "Jefe de Calidad (Packing y Campo). Dos rasgos marcan el rol: la fricción permanente con operaciones y la rotación del 70-80%, que obliga a sostener la cultura por transmisión, no por antigüedad.",
    "rituals": [
      {
        "id": "feedback-1-1-friccion",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "1 vez al mes",
        "purpose": "Desarrollar al Coordinador sobre el conflicto real del rol: fiscalizar sin generar conflicto innecesario con operaciones.",
        "context": {
          "freq": "1 vez al mes",
          "when": "Momento no operativo con el Coordinador de Calidad",
          "place": ""
        },
        "steps": [
          {
            "k": "Observo",
            "t": "cómo el Coordinador maneja la fricción con operaciones (no solo el resultado técnico) e identifico una conducta para corregir o potenciar."
          },
          {
            "k": "Me acerco",
            "t": "con apertura neutra: \"Oye, ¿cómo fue ese momento con el supervisor de campo?\""
          },
          {
            "k": "Comparto",
            "t": "\"Observé que [mencionar comportamiento o problema]. Esto generó [mencionar impacto]. ¿Qué acuerdo tomamos para corregirlo / potenciarlo?\""
          },
          {
            "k": "Escucho",
            "t": "2 minutos sin interrumpir."
          },
          {
            "k": "Impulso",
            "t": "pregunto qué podría hacer para mejorar o llevar esa fortaleza al siguiente nivel."
          },
          {
            "k": "Acordamos",
            "t": "definimos una acción concreta para poner en práctica."
          },
          {
            "k": "Cierro",
            "t": "con reconocimiento por el compromiso."
          },
          {
            "k": "Vuelvo",
            "t": "cuando se haya cumplido la fecha de seguimiento: \"¿Cómo te resultó lo que acordamos?\""
          }
        ],
        "phrases": [
          "\"Vi [comportamiento o problema]. Eso generó [impacto]. ¿Qué acuerdo tomamos?\"",
          "“Lo que mejor vi este mes fue [comportamiento], que generó [impacto]. Quiero que sepas que lo valoro.”",
          "\"Hablemos de cómo manejaste el roce con operaciones, no del resultado del muestreo.\"",
          "\"Sostener esa conversación sin escalar el conflicto fue clave. Lo vi.\"",
          "\"¿Qué necesitas de mí para que esa fricción no te consuma?\""
        ],
        "no": [
          "Enmarcar el acompañamiento solo en el resultado técnico.",
          "Dar la solución — es desarrollo, no instrucción.",
          "Irse sin un acuerdo concreto.",
          "No volver a preguntar sobre el acuerdo.",
          "Generalizar (\"siempre haces…\") en vez de nombrar un hecho concreto."
        ],
        "registro": {
          "soporte": "Tarjeta Acompañamiento 1 a 1",
          "fields": [
            {
              "k": "persona",
              "l": "Persona",
              "t": "person"
            },
            {
              "k": "situacion",
              "l": "Situación de fricción",
              "t": "area"
            },
            {
              "k": "acuerdo",
              "l": "Acuerdo",
              "t": "area"
            },
            {
              "k": "fecha",
              "l": "Fecha de seguimiento",
              "t": "date"
            }
          ]
        }
      },
      {
        "id": "espacio-de-confianza",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Semanal",
        "purpose": "Recoger las inquietudes del equipo antes de que se conviertan en problemas y darles seguimiento.",
        "context": {
          "when": "En espacios ya programados o existentes con tus reportes directos"
        },
        "steps": [
          {
            "k": "Abro",
            "t": "con una pregunta honesta: \"¿Cómo van? ¿Algo que quieran contarme o que necesiten?\""
          },
          {
            "k": "Espero",
            "t": "20-30 segundos en silencio; la gente no responde de inmediato."
          },
          {
            "k": "Escucho",
            "t": "sin interrumpir el tema que traen."
          },
          {
            "k": "Explico el porqué",
            "t": "comparto el contexto o la información que ayude a entender el tema."
          },
          {
            "k": "Decido",
            "t": "con qué recurso darle solución a cada tema: lo resuelvo yo, lo veo con un par o busco a quien pueda ayudar."
          },
          {
            "k": "Doy cierre",
            "t": "al día siguiente doy respuesta a las consultas pendientes."
          }
        ],
        "phrases": [
          "\"¿Cómo viene la semana? ¿Algo antes de arrancar?\"",
          "\"Ese tema lo resuelvo yo. Te confirmo el viernes.\"",
          "\"Eso no está en mis manos. Lo escalo a mi jefe — vuelvo con respuesta.\"",
          "\"La semana pasada [nombre] planteó [tema]. Así quedó.\""
        ],
        "no": [
          "Prometer a tu equipo lo que no puedes cumplir.",
          "No dejar sin respuesta a quien habló contigo."
        ],
        "registro": {
          "soporte": "Registro vía app",
          "fields": [
            {
              "k": "contexto",
              "l": "Contexto",
              "t": "area"
            },
            {
              "k": "tipo",
              "l": "Tipo",
              "t": "sel",
              "o": [
                "Operativo",
                "Cultural"
              ]
            },
            {
              "k": "urgencia",
              "l": "Urgencia",
              "t": "sel",
              "o": [
                "Hoy",
                "Esta semana"
              ]
            }
          ]
        }
      },
      {
        "id": "revisar-escaladas-diarias",
        "kind": "escaladas",
        "dimension": "escucha",
        "icon": "inbox",
        "title": "Revisión de escaladas",
        "freq": "Diario",
        "from": "Coordinador de Calidad",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por el Coordinador.",
        "purpose": "Primer nivel de visión consolidada — detectar patrones e intervenir lo que el Coordinador no puede resolver.",
        "steps": [
          {
            "k": "Reviso",
            "t": "el panel de escaladas — filtro por Urgencia (Hoy primero) y por Estado."
          },
          {
            "k": "Intervengo",
            "t": "temas sin respuesta en más de 48 horas directamente."
          },
          {
            "k": "Detecto",
            "t": "patrones: temas que se repiten semana a semana en varios sectores o áreas."
          },
          {
            "k": "Escalo",
            "t": "a mi jefe con mi análisis del patrón — no solo el listado de temas."
          }
        ],
        "phrases": [
          "\"Este tema lleva 3 días sin respuesta — lo tomo yo.\"",
          "\"Veo que el tema X aparece en varios sectores esta semana. Eso no es operativo — es estructural.\"",
          "\"Le comunico al N1 el patrón, no el incidente.\""
        ],
        "no": [
          "Revisar el panel solo cuando algo explota.",
          "Escalar al N1 sin haber identificado el patrón.",
          "Dejar que el panel se convierta en archivo muerto."
        ],
        "context": {
          "freq": "Diario",
          "when": "Al cierre del día"
        }
      },
      {
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "graduation-cap",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez al mes",
        "purpose": "Hacer visible quién está modelando Cultiva de manera oportuna.",
        "context": {
          "freq": "1 vez al mes",
          "when": "3 min",
          "place": "Reunión de equipo"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "conscientemente a la persona del equipo que destaquen en conducta o rendimiento durante el período."
          },
          {
            "k": "Anoto",
            "t": "la conducta específica y el impacto que tuvo para el equipo o la operación."
          },
          {
            "k": "Nombro",
            "t": "en el momento oportuno: \"[Nombre de la persona a reconocer], te felicito por [mencionar conducta], eso nos ayudó en [mencionar impacto].\""
          }
        ],
        "phrases": [
          "\"Antes de seguir, quiero mencionar a [nombre]. Vi [conducta específica] cuando [situación]. Eso sumó mucho en [impacto].\"",
          "\"Si tuviera que poner un ejemplo de Cultiva en acción, sería [nombre] cuando [situación].\""
        ],
        "no": [
          "Reconocimiento vago: \"buen trabajo\" o \"todos lo hicieron bien\".",
          "Reconocer siempre a los mismos.",
          "Hacerlo en privado cuando merece ser público (o viceversa).",
          "Hacerlo con excesiva frecuencia — pierde sinceridad."
        ],
        "registro": {
          "soporte": "Registro de reconocimiento",
          "fields": [
            {
              "k": "reconozco",
              "l": "Reconozco a",
              "t": "reportes",
              "req": true
            },
            {
              "k": "pilar",
              "l": "Pilar que reconozco",
              "t": "sel",
              "req": true,
              "o": [
                "Excelencia: Elevó el estándar de su trabajo",
                "Eficiencia: Simplificó y ejecutó con agilidad",
                "Accountability: Se hizo cargo de principio a fin",
                "Integridad: Actuó con transparencia y cuidó a las personas"
              ]
            }
          ]
        },
        "note": "Reconocimiento opcional: También puedo reconocer al equipo de mis reportes (coordinado con jefe directo)"
      }
    ]
  },

  /* ---------------------------------------------------------- N3 */
  "cal-n3": {
    "id": "cal-n3",
    "area": "calidad",
    "level": "N3",
    "role": "Coordinador de Calidad",
    "sub": "Eslabón N3 del cascadeo",
    "context": "Nivel N3 de Calidad, entre el Jefe de Calidad y los Supervisores de Calidad (campo y planta). Tiene a su cargo a los Supervisores de Calidad. Hereda los dos rasgos de la gerencia: la fricción con operaciones y la rotación del 70-80%. Es el eslabón N3 del cascadeo: clasifica, cierra <48 h lo suyo y eleva al Jefe lo estructural.",
    "rituals": [
      {
        "id": "coaching-friccion",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "1 vez al mes por Supervisor",
        "purpose": "Desarrollar al Supervisor sobre cómo manejar la fricción con operaciones sin perder el estándar.",
        "context": {
          "freq": "1 vez al mes por Supervisor",
          "when": "15-25 min",
          "place": "En terreno durante la jornada"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "cómo el Supervisor maneja la fricción con operaciones/cosecha (no solo el resultado técnico) e identifico una conducta para corregir o potenciar."
          },
          {
            "k": "Me acerco",
            "t": "con tono neutro, sin señal de corrección."
          },
          {
            "k": "Comparto",
            "t": "\"Observé que [mencionar comportamiento o problema]. Esto generó [mencionar impacto]. ¿Qué acuerdo tomamos para corregirlo / potenciarlo?\""
          },
          {
            "k": "Escucho",
            "t": "2 minutos sin interrumpir."
          },
          {
            "k": "Impulso",
            "t": "pregunto qué podría hacer para mejorar o llevar esa fortaleza al siguiente nivel."
          },
          {
            "k": "Acordamos",
            "t": "definimos una acción concreta para poner en práctica."
          },
          {
            "k": "Cierro",
            "t": "con reconocimiento por el compromiso."
          },
          {
            "k": "Vuelvo",
            "t": "cuando se haya cumplido la fecha de seguimiento: \"¿Cómo te resultó lo que acordamos?\""
          }
        ],
        "phrases": [
          "\"Vi [comportamiento o problema]. Eso generó [impacto]. ¿Qué acuerdo tomamos?\"",
          "“Lo que mejor vi este mes fue [comportamiento], que generó [impacto]. Quiero que sepas que lo valoro.”",
          "\"Hablemos de cómo manejaste el roce con operaciones, no del resultado del muestreo.\"",
          "\"Sostener esa conversación sin escalar el conflicto fue clave. Lo vi.\"",
          "\"¿Qué necesitas de mí para que esa fricción no te consuma?\""
        ],
        "no": [
          "Enmarcar el acompañamiento solo en el resultado técnico.",
          "Dar la solución — es desarrollo, no instrucción.",
          "Irse sin un acuerdo concreto.",
          "No volver a preguntar sobre el acuerdo.",
          "Generalizar (\"siempre haces…\") en vez de nombrar un hecho concreto."
        ],
        "registro": {
          "soporte": "Tarjeta Acompañamiento 1 a 1",
          "fields": [
            {
              "k": "persona",
              "l": "Persona",
              "t": "person"
            },
            {
              "k": "situacion",
              "l": "Situación de fricción",
              "t": "area"
            },
            {
              "k": "acuerdo",
              "l": "Acuerdo",
              "t": "area"
            },
            {
              "k": "fecha",
              "l": "Fecha de seguimiento",
              "t": "date"
            }
          ]
        }
      },
      {
        "id": "espacio-de-confianza",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Semanal",
        "purpose": "Recoger las inquietudes del equipo antes de que se conviertan en problemas y darles seguimiento.",
        "context": {
          "when": "En espacios ya programados o existentes con tus reportes directos"
        },
        "steps": [
          {
            "k": "Abro",
            "t": "con una pregunta honesta: \"¿Cómo van? ¿Algo que quieran contarme o que necesiten?\""
          },
          {
            "k": "Espero",
            "t": "20-30 segundos en silencio; la gente no responde de inmediato."
          },
          {
            "k": "Escucho",
            "t": "sin interrumpir el tema que traen."
          },
          {
            "k": "Explico el porqué",
            "t": "comparto el contexto o la información que ayude a entender el tema."
          },
          {
            "k": "Decido",
            "t": "con qué recurso darle solución a cada tema: lo resuelvo yo, lo veo con un par o busco a quien pueda ayudar."
          },
          {
            "k": "Doy cierre",
            "t": "al día siguiente doy respuesta a las consultas pendientes."
          }
        ],
        "phrases": [
          "\"¿Cómo viene la semana? ¿Algo que necesite saber?\"",
          "\"Ese tema lo veo yo — te aviso mañana.\"",
          "\"Eso no está en mis manos. Lo escalo a mi jefe — vuelvo esta semana.\"",
          "\"El lunes [nombre] planteó [tema]. Así quedó.\""
        ],
        "no": [
          "Prometer a tu equipo lo que no puedes cumplir.",
          "No dejar sin respuesta a quien habló contigo."
        ],
        "registro": {
          "soporte": "Registro vía app",
          "fields": [
            {
              "k": "contexto",
              "l": "Contexto",
              "t": "area"
            },
            {
              "k": "tipo",
              "l": "Tipo",
              "t": "sel",
              "o": [
                "Operativo",
                "Cultural"
              ]
            },
            {
              "k": "urgencia",
              "l": "Urgencia",
              "t": "sel",
              "o": [
                "Hoy",
                "Esta semana"
              ]
            }
          ]
        },
        "note": "También puedes aplicarlo 1:1. En privado el equipo se abre más."
      },
      {
        "id": "revisar-escaladas-diarias",
        "kind": "escaladas",
        "dimension": "escucha",
        "icon": "inbox",
        "title": "Revisión de escaladas",
        "freq": "Diario",
        "from": "Supervisores de Calidad",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por los Supervisores de Calidad.",
        "purpose": "Que el Supervisor/TAC sepa que escalar tiene sentido — respuesta en menos de 48 horas.",
        "steps": [
          {
            "k": "Recibo",
            "t": "las escaladas del día — ya clasificadas por Tipo y Urgencia."
          },
          {
            "k": "Decido",
            "t": "con un toque para cada tema: Resuelvo yo · En proceso · Escalo a mi jefe."
          },
          {
            "k": "Respondo",
            "t": "si resuelvo, actúo y le doy respuesta (el N4 recibe notificación automática)."
          },
          {
            "k": "Escalo",
            "t": "a mi jefe con criterio: el tema sube con mi decisión y contexto adicional."
          },
          {
            "k": "Cierro",
            "t": "ningún tema queda sin destino más de 48 horas."
          }
        ],
        "phrases": [
          "\"Tu tema lo revisé. Lo resuelvo yo — te confirmo mañana.\"",
          "\"Lo escalé arriba. Tendrás respuesta el [día].\"",
          "\"Queda en proceso — necesito [dato]. Dame hasta [fecha].\""
        ],
        "no": [
          "Dejar temas sin decisión más de 48 horas.",
          "Escalar sin agregar tu propio criterio.",
          "Silencio — destruye la confianza en el sistema."
        ],
        "context": {
          "freq": "Diario",
          "when": "Al cierre del día"
        }
      },
      {
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "graduation-cap",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez al mes",
        "purpose": "Hacer visible quién está modelando Cultiva de manera oportuna.",
        "context": {
          "freq": "1 vez al mes",
          "when": "3 min",
          "place": "Reunión de equipo"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "conscientemente a los Supervisores de Calidad que destaquen en conducta o rendimiento durante el período."
          },
          {
            "k": "Anoto",
            "t": "la conducta específica y el impacto que tuvo para el equipo o la operación."
          },
          {
            "k": "Nombro",
            "t": "en el momento oportuno: \"[Nombre de la persona a reconocer], te felicito por [mencionar conducta], eso nos ayudó en [mencionar impacto].\""
          }
        ],
        "phrases": [
          "\"Antes de seguir, quiero mencionar a [nombre]. Vi [conducta específica] cuando [situación]. Eso sumó mucho en [impacto].\"",
          "\"Si tuviera que poner un ejemplo de Cultiva en acción, sería [nombre] cuando [situación].\""
        ],
        "no": [
          "Reconocimiento vago: \"buen trabajo\" o \"todos lo hicieron bien\".",
          "Reconocer siempre a los mismos.",
          "Hacerlo en privado cuando merece ser público (o viceversa).",
          "Hacerlo con excesiva frecuencia — pierde sinceridad."
        ],
        "registro": {
          "soporte": "Registro de reconocimiento",
          "fields": [
            {
              "k": "reconozco",
              "l": "Reconozco a",
              "t": "reportes",
              "req": true
            },
            {
              "k": "pilar",
              "l": "Pilar que reconozco",
              "t": "sel",
              "req": true,
              "o": [
                "Excelencia: Elevó el estándar de su trabajo",
                "Eficiencia: Simplificó y ejecutó con agilidad",
                "Accountability: Se hizo cargo de principio a fin",
                "Integridad: Actuó con transparencia y cuidó a las personas"
              ]
            }
          ]
        }
      }
    ]
  },

  /* ---------------------------------------------------------- N4 */
  "cal-n4": {
    "id": "cal-n4",
    "area": "calidad",
    "level": "N4",
    "role": "Supervisor de Calidad",
    "sub": "La bisagra de Calidad",
    "context": "La bisagra de Calidad (1 de Packing y 1 de Terreno). Equivale al Supervisor de Fundo en Cosecha, con dos variaciones: la rotación del 70-80% obliga a desarrollar a su gente y el técnico TAC está MÁS expuesto al conflicto con operaciones que un cosechador. Cierra <48 h la fricción a su alcance y eleva lo estructural al Jefe de Calidad.",
    "rituals": [
      {
        "id": "saludo-con-proposito",
        "kind": "light",
        "dimension": "lidera",
        "icon": "sunrise",
        "title": "Saludo con propósito",
        "freq": "Diario",
        "reminder": "Al inicio del día no olvides saludar a tu equipo con energía para iniciar bien la jornada.",
        "hasDone": true,
        "purpose": "Al inicio del día no olvides saludar a tu equipo con energía para iniciar bien la jornada.",
        "context": {
          "freq": "Diario",
          "when": "Inicio de jornada"
        },
        "registro": {
          "hidden": true
        }
      },
      {
        "id": "coaching-en-terreno",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "2 veces por semana",
        "purpose": "Desarrollar al TAC sobre cómo llegar al área como aliado — no como inspector.",
        "context": {
          "freq": "2 veces por semana",
          "when": "15-25 min",
          "place": "En terreno durante la jornada"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "cómo el colaborador maneja la fricción con operaciones/cosecha, no solo el resultado técnico."
          },
          {
            "k": "Me acerco",
            "t": "con apertura neutra: \"Oye, ¿cómo fue ese momento con el supervisor de campo/planta?\""
          },
          {
            "k": "Abro",
            "t": "con CIA — \"Vi [mencionar comportamiento o problema]. Eso generó [mencionar impacto]. ¿Qué acuerdo tomamos?\""
          },
          {
            "k": "Pregunto",
            "t": "¿qué haría distinto en una próxima situación similar?"
          },
          {
            "k": "Acordamos",
            "t": "una sola cosa concreta para la próxima vez."
          },
          {
            "k": "Cierro",
            "t": "con reconocimiento por el compromiso."
          },
          {
            "k": "Vuelvo",
            "t": "después de la próxima situación de fricción."
          }
        ],
        "phrases": [
          "\"Vi que [comportamiento] cuando llegaste al área. Eso generó [impacto]. ¿Qué acuerdo tomamos?\"",
          "“Lo que mejor vi este mes fue [comportamiento], que generó [impacto]. Quiero que sepas que lo valoro.”",
          "\"Hablemos de cómo llegaste al área, no del resultado del muestreo.\"",
          "\"La forma como abriste esa conversación marcó la diferencia. Lo vi.\""
        ],
        "no": [
          "Enmarcar el acompañamiento solo en el resultado técnico.",
          "Dar la solución — es desarrollo, no instrucción.",
          "Irse sin un acuerdo concreto.",
          "No volver a preguntar sobre el acuerdo."
        ],
        "registro": {
          "soporte": "Tarjeta Acompañamiento 1 a 1",
          "fields": [
            {
              "k": "persona",
              "l": "Persona",
              "t": "person"
            },
            {
              "k": "situacion",
              "l": "Situación de fricción",
              "t": "area"
            },
            {
              "k": "acuerdo",
              "l": "Acuerdo",
              "t": "area"
            },
            {
              "k": "fecha",
              "l": "Fecha de seguimiento",
              "t": "date"
            }
          ]
        }
      },
      {
        "id": "espacio-de-confianza",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Diario (ambos turnos)",
        "purpose": "Recoger las inquietudes del equipo antes de que se conviertan en problemas y darles seguimiento.",
        "context": {
          "when": "Al inicio de turno",
          "place": "Post-charla operativa"
        },
        "steps": [
          {
            "k": "Abro",
            "t": "con una pregunta honesta: \"¿Cómo van? ¿Algo que quieran contarme o que necesiten?\""
          },
          {
            "k": "Espero",
            "t": "20-30 segundos en silencio; la gente no responde de inmediato."
          },
          {
            "k": "Escucho",
            "t": "sin interrumpir el tema que traen."
          },
          {
            "k": "Explico el porqué",
            "t": "comparto el contexto o la información que ayude a entender el tema."
          },
          {
            "k": "Decido",
            "t": "con qué recurso darle solución a cada tema: lo resuelvo yo, lo veo con un par o busco a quien pueda ayudar."
          },
          {
            "k": "Doy cierre",
            "t": "al día siguiente doy respuesta a las consultas pendientes."
          }
        ],
        "phrases": [
          "\"Antes de arrancar, ¿algo que necesiten que sepa o que tenga que escalar?\"",
          "\"Ese tema lo resuelvo yo en este turno. Te aviso antes del cierre.\"",
          "\"No está en mis manos. Lo subo ahora — mañana te traigo respuesta.\"",
          "\"Ayer [nombre] planteó [tema]. Lo resolví / llega el [día].\""
        ],
        "no": [
          "Prometer a tu equipo lo que no puedes cumplir.",
          "No dejar sin respuesta a quien habló contigo."
        ],
        "registro": {
          "soporte": "Escalada vía app",
          "fields": [
            {
              "k": "contexto",
              "l": "Contexto",
              "t": "area"
            },
            {
              "k": "tipo",
              "l": "Tipo",
              "t": "sel",
              "o": [
                "Operativo",
                "Cultural"
              ]
            },
            {
              "k": "urgencia",
              "l": "Urgencia",
              "t": "sel",
              "o": [
                "Hoy",
                "Esta semana"
              ]
            }
          ]
        },
        "note": "También puedes aplicarlo 1:1. En privado el equipo se abre más."
      },
      {
        "id": "revisar-escaladas-diarias",
        "kind": "escaladas",
        "dimension": "escucha",
        "icon": "inbox",
        "title": "Revisión de escaladas",
        "freq": "Diario",
        "from": "Técnicos TAC",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por los Técnicos TAC.",
        "purpose": "Que el TAC sepa que escalar tiene sentido — respuesta en menos de 48 horas.",
        "steps": [
          {
            "k": "Recibo",
            "t": "las escaladas del día — ya clasificadas por Tipo y Urgencia."
          },
          {
            "k": "Decido",
            "t": "con un toque para cada tema: Resuelvo yo · En proceso · Escalo a mi jefe."
          },
          {
            "k": "Respondo",
            "t": "si resuelvo, actúo y le doy respuesta"
          },
          {
            "k": "Escalo",
            "t": "a mi jefe con criterio: el tema sube con mi decisión y contexto adicional."
          },
          {
            "k": "Cierro",
            "t": "ningún tema queda sin destino más de 48 horas."
          }
        ],
        "phrases": [
          "\"Tu tema lo revisé. Lo resuelvo yo — te confirmo mañana.\"",
          "\"Lo escalé arriba. Tendrás respuesta el [día].\"",
          "\"Queda en proceso — necesito [dato]. Dame hasta [fecha].\""
        ],
        "no": [
          "Dejar temas sin decisión más de 48 horas.",
          "Escalar sin agregar tu propio criterio.",
          "Silencio — destruye la confianza en el sistema."
        ],
        "context": {
          "freq": "Diario",
          "when": "Al cierre del día"
        }
      },
      {
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "graduation-cap",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez por semana",
        "purpose": "Hacer visible quién mejoró su relacionamiento con operaciones — la conducta, no el logro técnico.",
        "context": {
          "freq": "1 vez por semana",
          "when": "10 min",
          "place": "Reunión de equipo o canal del equipo"
        },
        "steps": [
          {
            "k": "Identifico",
            "t": "a fin de mes 1-2 personas que destacaron en su forma de relacionarse con operaciones (conducta, no resultado técnico)."
          },
          {
            "k": "Elijo",
            "t": "el espacio más adecuado para mencionarlo."
          },
          {
            "k": "Nombro",
            "t": "en el momento oportuno: \"[Nombre de la persona a reconocer], te felicito por [mencionar conducta], eso nos ayudó en [mencionar impacto].\""
          }
        ],
        "phrases": [
          "\"Quiero reconocer a [nombre]. Vi cómo manejaste ese momento con operaciones. Eso es Cultiva en acción.\"",
          "\"Si tuviera que poner un ejemplo de cómo se llega como aliado, sería [nombre] cuando [situación].\""
        ],
        "no": [
          "Reconocer solo por el % de calidad — eso es resultado, no conducta Cultiva.",
          "Reconocimiento genérico.",
          "Saltárselo un mes."
        ],
        "registro": {
          "soporte": "Registro de reconocimiento",
          "fields": [
            {
              "k": "reconozco",
              "l": "Reconozco a",
              "t": "reportes",
              "req": true
            },
            {
              "k": "pilar",
              "l": "Pilar que reconozco",
              "t": "sel",
              "req": true,
              "o": [
                "Excelencia: Elevó el estándar de su trabajo",
                "Eficiencia: Simplificó y ejecutó con agilidad",
                "Accountability: Se hizo cargo de principio a fin",
                "Integridad: Actuó con transparencia y cuidó a las personas"
              ]
            }
          ]
        }
      },
      {
        "id": "cierre-con-agradecimiento",
        "kind": "light",
        "dimension": "lidera",
        "icon": "sunset",
        "title": "Cierre con agradecimiento",
        "freq": "Diario",
        "reminder": "Al cierre del turno (ambos) no olvides agradecer a tu equipo por el esfuerzo realizado.",
        "hasDone": true,
        "purpose": "Al cierre de la jornada no olvides agradecer a tu equipo por el esfuerzo realizado.",
        "context": {
          "freq": "Diario",
          "when": "Cierre de jornada"
        },
        "registro": {
          "hidden": true
        }
      }
    ]
  },

  /* ---------------------------------------------------------- TAC */
  "cal-tac": {
    "id": "cal-tac",
    "area": "calidad",
    "level": "TAC",
    "role": "Técnico TAC",
    "sub": "Donde arranca el cascadeo",
    "context": "La capa operativa de Calidad. El TAC fiscaliza y eso genera fricción permanente con el cosechador y con operaciones. El giro Cultiva: Calidad RECONOCE, no solo fiscaliza. Aquí ARRANCA el cascadeo de escucha de Calidad. Su microhábito clave es desactivar la fricción ANTES de fiscalizar.",
    "rituals": [
      {
        "id": "acercamiento-calido",
        "kind": "full",
        "dimension": "lidera",
        "icon": "handshake",
        "title": "Charla de Impulso",
        "freq": "Diario",
        "purpose": "Compartir recomendaciones concretas con el grupo de cosecha de menor puntuación para ayudarlos a mejorar. NO es una llamada de atención: es un impulso.",
        "context": {
          "freq": "Diario",
          "when": "En la charla diaria del grupo con menor puntaje"
        },
        "steps": [
          {
            "k": "Revisa",
            "t": "los resultados del día anterior e identifica al grupo con menor puntuación."
          },
          {
            "k": "Coordina",
            "t": "con el Líder de Cosecha del grupo que visitarás y acércate a su punto de reunión a la hora de su charla diaria."
          },
          {
            "k": "Preséntate",
            "t": "con un tono tranquilo y cercano; diles que vienes a compartir lo que se observó en la evaluación."
          },
          {
            "k": "Da recomendaciones",
            "t": "concretas y fáciles de aplicar (ej.: dónde va la fruta con defecto, cómo evitar desgarros)."
          },
          {
            "k": "Recuérdales",
            "t": "que la evaluación es grupal: el objetivo es mejorar como equipo, no señalar personas."
          },
          {
            "k": "Ofrécete",
            "t": "a estar disponible durante toda la jornada y abre espacio para preguntas."
          },
          {
            "k": "Cierra",
            "t": "con un mensaje motivador y despídete con energía."
          }
        ],
        "phrases": [
          "\"Buenos días, equipo. Soy [nombre], de Calidad. Quiero compartirles lo que vimos ayer, para que hoy nos vaya mejor.\"",
          "\"Recuerden, evaluamos al grupo completo. Esto es para que juntos saquemos adelante una buena cosecha.\"",
          "\"Voy a estar por el campo todo el día. Cualquier duda de calidad, me llaman con confianza.\""
        ],
        "no": [
          "\"Ayer les fue pésimo, vengo a corregirlos.\"",
          "\"Si no mejoran, vamos a tener problemas.\"",
          "\"Ya les he dicho esto muchas veces, no sé por qué no aprenden.\""
        ],
        "registro": {
          "hidden": true
        }
      },
      {
        "id": "escucho-para-ayudar",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Diálogo con Evidencia",
        "freq": "Diario",
        "purpose": "Entregar los resultados de la evaluación al Líder de Cosecha usando evidencia objetiva. Si hay desacuerdo, no se discuten opiniones: se muestra el dato.",
        "context": {
          "freq": "Diario",
          "when": "Durante la jornada"
        },
        "steps": [
          {
            "k": "Acércate",
            "t": "al acopio del grupo que vas a evaluar, saluda al Líder de Cosecha y coméntale que vas a iniciar la evaluación rutinaria."
          },
          {
            "k": "Comparte",
            "t": "al terminar de evaluar: llama al Líder de Cosecha, cuéntale lo que encontraste e invítalo a validar los defectos juntos."
          },
          {
            "k": "Muestra la evidencia",
            "t": "ante el desacuerdo: usa el calibrador y/o el catálogo. No discutas opiniones."
          },
          {
            "k": "Escucha",
            "t": "al líder con respeto y reconoce las dificultades del campo, pero mantén tu posición con base en los datos y la evidencia de tus herramientas."
          },
          {
            "k": "Cierra",
            "t": "recordándole que tú mides lo que ya pasó, pero que él puede evitarlo con supervisión activa."
          },
          {
            "k": "Ofrécete",
            "t": "como apoyo: estás ahí para ayudar, no para desaprobar."
          }
        ],
        "phrases": [
          "\"Líder, ya terminé la evaluación. ¿Validamos juntos los hallazgos?\"",
          "\"Revisémoslo con el calibrador y el catálogo, así no queda en lo que yo diga o tú digas.\"",
          "\"Mi trabajo es ayudarte, no desaprobarte. La evidencia está aquí.\"",
          "\"Tómalo como impulso para la siguiente evaluación. Cuenta conmigo.\""
        ],
        "no": [
          "\"Yo soy el que evalúa aquí, esto es lo que hay y punto.\"",
          "\"Siempre es lo mismo con tu grupo.\"",
          "\"No es mi problema si el campo está difícil.\""
        ],
        "registro": {
          "hidden": true
        }
      },
      {
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "thumbs-up",
        "title": "Reconocimiento Sincero",
        "freq": "Semanal",
        "purpose": "Reconocer de forma sincera al grupo de cosecha con mejores resultados, valorando su trabajo y destacando cómo su esfuerzo impacta en los resultados.",
        "context": {
          "freq": "Semanal",
          "when": "En grupo",
          "place": "Al inicio o al cierre"
        },
        "steps": [
          {
            "k": "Identifica",
            "t": "al grupo con los mejores resultados de calidad sostenidos durante la semana."
          },
          {
            "k": "Visítalos",
            "t": "en su parcela a la hora de su charla diaria."
          },
          {
            "k": "Cuéntales",
            "t": "por qué estás ahí: \"Equipo, esta semana sus resultados fueron los mejores y eso hay que destacarlo\"."
          },
          {
            "k": "Conecta",
            "t": "su logro con el impacto real: \"Esto impactó positivamente en la calidad de la fruta\"."
          },
          {
            "k": "Reconoce",
            "t": "que el campo tiene días difíciles, pero como grupo se mantuvieron constantes."
          },
          {
            "k": "Felicítalos",
            "t": "con sinceridad: sé genuino, no exagerado."
          },
          {
            "k": "Cierra",
            "t": "con un mensaje de unidad: como campo, somos un solo equipo."
          }
        ],
        "phrases": [
          "\"Quería tomarme un momento para reconocerlos. Lo que hicieron marca una diferencia.\"",
          "\"Sé que hay días difíciles en el campo, pero ustedes como grupo se mantuvieron constantes. Eso tiene mérito.\"",
          "\"¡Felicitaciones de verdad! Sigan así, como campo somos un solo equipo.\""
        ],
        "no": [
          "\"Solo vengo porque me pidieron que los felicite.\"",
          "\"A ver si la próxima semana lo mantienen, siempre bajan.\"",
          "\"Es lo que se espera de todos, no es para tanto.\""
        ],
        "registro": {
          "soporte": "Agenda Cultiva — Reconocimiento diario",
          "fields": [
            {
              "k": "reconozco",
              "l": "Menciona el nombre de quién está liderando la cuadrilla, fundo y lote",
              "t": "text",
              "req": true
            }
          ]
        }
      }
    ]
  }

});

/* índice área → perfiles (extiende el de data-cosecha.js)
   Nota: "cal-n1" (Gerente de Calidad) NO aparece en el selector de puesto,
   pero SIGUE en window.PROFILES para el login / la programación del sistema. */
window.PROFILES_BY_AREA.calidad =
  ["cal-n2", "cal-n3", "cal-n4", "cal-tac"].map(function (id) { return window.PROFILES[id]; });

/* datos demo de la bandeja de escaladas (cascadeo de Calidad · fricción c/ operaciones) */
Object.assign(window.ESCALADAS_DEMO, {
  "cal-n2": [
    {
      "id": "e1", "from": "Equipo base de Calidad", "role": "Conversación quincenal",
      "tema": "Fricción con operaciones",
      "detalle": "El equipo base siente que el muestreo se cuestiona en campo y no hay respaldo claro frente al cosechador.",
      "requiere": "Un criterio común con operaciones sobre cómo se maneja una observación de calidad.",
      "date": 1781990110069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Carlos Leyva", "role": "Coordinador de Calidad",
      "tema": "Rotación / inducción",
      "detalle": "Llegaron tres nuevos rotativos sin mentor base asignado; se pierde la transmisión cultural.",
      "requiere": "Confirmar duplas mentor–nuevo antes de que sigan operando solos.",
      "date": 1781949910069, "status": null, "thread": []
    }
  ],
  "cal-n3": [
    {
      "id": "e1", "from": "Marta Ríos", "role": "Supervisora de Calidad · Campo",
      "tema": "Roce con el cosechador",
      "detalle": "Un TAC tuvo un roce fuerte con una cuadrilla por una observación de calibre; quedó tenso.",
      "requiere": "Apoyo para mediar y un mensaje común con el Líder de Cosecha.",
      "date": 1782010110069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Jorge Effio", "role": "Supervisor de Calidad · Packing",
      "tema": "Exposición del TAC",
      "detalle": "Un técnico TAC de planta acumula fricción con el supervisor de línea hace varios días.",
      "requiere": "Conversación de carga y, si sigue, elevar al Jefe de Calidad.",
      "date": 1781921110069, "status": null, "thread": []
    }
  ],
  "cal-n4": [
    {
      "id": "e1", "from": "Pedro Saldaña", "role": "Técnico TAC · Cosecha",
      "tema": "Fricción · protocolo",
      "detalle": "No hay protocolo claro para una casuística de calidad que apareció en el lote; la cuadrilla presiona por avanzar.",
      "requiere": "Definir el criterio con el Jefe de Calidad para responder al campo.",
      "date": 1782010110069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Rosa Campos", "role": "Técnica TAC · Planta",
      "tema": "Exposición al conflicto",
      "detalle": "La presión por fiscalizar en plena campaña la está desgastando; lo conversó al cierre.",
      "requiere": "Conversación de carga y respaldo frente a operaciones.",
      "date": 1781990110069, "status": null, "thread": []
    }
  ]
});
