/* ============================================================
   DATA · KIT CULTIVA — PRODUCCIÓN AGRÍCOLA (LABORES) · N1–N4
   Reconstruido (21/06/2026) desde "Kit Cultiva por Perfil v5.1.xlsx"
   — fichas por perfil (hojas 5–8) + hoja "Resumen rituales — multiárea".
   Se inyecta sobre las estructuras creadas en data-cosecha.js
   (window.PROFILES / PROFILES_BY_AREA / ESCALADAS_DEMO).
   Regla del área: premia PERMANENCIA, no desempeño puntual; el dolor
   cultural es la INVISIBILIDAD del trabajo silencioso.
   ============================================================ */

Object.assign(window.PROFILES, {

  /* ---------------------------------------------------------- N1 */
  "prod-n1": {
    "id": "prod-n1",
    "area": "produccion",
    "level": "N1",
    "role": "Gerente / Sub-gerente de Prod. Agrícola",
    "sub": "Nombra lo silencioso",
    "context": "Sponsors del piloto en Labores. El dolor de esta gerencia NO es de gestión sino de INVISIBILIDAD: que el riego no falle, que la sanidad cumpla, que la premezcla salga, son logros que nadie nota. El rol del sub-gerente es nombrar lo silencioso y cerrar el cascadeo de escucha que sube desde Riego, Sanidad y Producción.",
    "rituals": [
      {
        "id": "feedback-1-1-mensual",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "1 vez al mes",
        "purpose": "Desarrollar a un miembro de tu equipo mediante observación, pregunta y acuerdo concreto — modelo CIA integrado (Comportamiento o Problema · Impacto · Acuerdo).",
        "context": {
          "freq": "1 vez al mes",
          "when": "30-45 min",
          "place": "Oficina o caminata por campo con la Jefatura"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "Identifico una conducta observada para corregir o potenciar."
          },
          {
            "k": "Me acerco",
            "t": "Con tono neutro, sin señal de corrección.3."
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
            "t": "Pregunto qué podría hacer para mejorar o llevar esa fortaleza al siguiente nivel."
          },
          {
            "k": "Acordamos",
            "t": "Definimos una acción concreta para poner en práctica."
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
          "\"Repíteme el acuerdo para asegurarnos de que quedamos igual.\"",
          "\"Antes de cerrar quiero reconocer que [conducta positiva]. Eso me da confianza.\""
        ],
        "no": [
          "Hablar de personas, no de hechos observados.",
          "Cerrar sin un acuerdo concreto.",
          "Saltarse el reconocimiento positivo al final.",
          "Convertirlo en monólogo de instrucciones.",
          "No volver a preguntar sobre el acuerdo en los días siguientes."
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
        "id": "caminata-por-areas",
        "kind": "full",
        "dimension": "lidera",
        "icon": "footprints",
        "title": "Caminata de Liderazgo",
        "freq": "1 visita a cada área al trimestre",
        "purpose": "Hacer visible que la gerencia ve el trabajo que nadie nombra — Riego, Sanidad y Premezcla incluidos.",
        "context": {
          "freq": "1 visita a cada área al trimestre",
          "when": "En el lote, almacén o caseta — nunca en oficina"
        },
        "steps": [
          {
            "k": "Coordino",
            "t": "la visita con anticipación — llevo 2-3 temas para escuchar en campo."
          },
          {
            "k": "Llego",
            "t": ", saludo por nombre y observo la labor SIN corregir ni dar instrucciones."
          },
          {
            "k": "Pregunto",
            "t": "y ESCUCHO — el 70% del tiempo escucho."
          },
          {
            "k": "Cierro",
            "t": "con una promesa cumplible — nunca prometo lo que no controlo."
          },
          {
            "k": "Anuncio",
            "t": "que volveré."
          }
        ],
        "phrases": [
          "\"Vine porque quería ver de cerca lo que hacen acá, no a revisar nada.\"",
          "\"Que esto funcione sin que nadie lo note es justo lo que vengo a reconocer.\"",
          "\"Esto que me cuentas lo subo y te traigo respuesta esta semana.\""
        ],
        "no": [
          "Convertirla en auditoría o revisión técnica.",
          "Proponer soluciones en el momento — primero escuchar.",
          "Visitar solo las áreas visibles y saltarse Riego o la caseta."
        ],
        "registro": {
          "soporte": "Registro de visita en terreno",
          "fields": [
            {
              "k": "area",
              "l": "Área visitada",
              "t": "text"
            },
            {
              "k": "persona",
              "l": "Jefe visitado",
              "t": "person"
            },
            {
              "k": "temas",
              "l": "Temas levantados",
              "t": "area"
            },
            {
              "k": "acuerdos",
              "l": "Acuerdos",
              "t": "area"
            },
            {
              "k": "proxima",
              "l": "Próxima visita",
              "t": "date"
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
        "from": "Jefaturas",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por las Jefaturas.",
        "purpose": "Detectar lo que se repite — dar destino institucional a lo que el Jefe no puede resolver.",
        "steps": [
          {
            "k": "Reviso",
            "t": "el panel consolidado — busco patrones, no el detalle de cada tema."
          },
          {
            "k": "Identifico",
            "t": "qué temas estructurales requieren mi intervención o una decisión institucional."
          },
          {
            "k": "Doy destino",
            "t": "a lo estructural: resuelvo, derivo a RRLL/Ops o marco para seguimiento con fecha."
          },
          {
            "k": "Comunico",
            "t": "de vuelta a mi equipo mi decisión para que el loop cierre hacia abajo."
          }
        ],
        "phrases": [
          "\"Este patrón no es de fundo — es sistémico. Lo trabajo yo.\"",
          "\"Lo derivo a RRLL con instrucción clara y fecha.\"",
          "\"Comunico al N2 mi decisión para que llegue al equipo.\""
        ],
        "no": [
          "Revisar el panel como si fuera un reporte operativo.",
          "Dejar temas estructurales sin dueño ni fecha.",
          "No cerrar el loop hacia abajo con la decisión tomada."
        ],
        "context": {
          "freq": "Diario",
          "when": "Al cierre del día"
        }
      },
      {
        "id": "espacio-de-confianza",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Diario",
        "purpose": "Recoger inquietudes antes de que se conviertan en problemas, fomentar la comunicación, cercanía y espacios seguros.",
        "context": {
          "when": "En espacios ya programados o existentes con tus reportes directos"
        },
        "steps": [
          {
            "k": "Abro",
            "t": "\"¿Algo que necesiten que escuche antes de empezar?\""
          },
          {
            "k": "Espero",
            "t": "20-30 segundos en silencio; la gente no responde de inmediato."
          },
          {
            "k": "Escucho",
            "t": "Sin interrumpir. Si nadie habla: \"¿Cómo vienen hoy?\""
          },
          {
            "k": "Retengo",
            "t": "Me quedo con el tema y su contexto para darle seguimiento."
          },
          {
            "k": "Actúo",
            "t": "Para cada tema:\n• Si puedo resolverlo: defino la acción y establezco la urgencia (Hoy / Esta semana).\n• Si no puedo resolverlo: marco \"No resuelvo yo\", agradezco su apertura y le brindo una orientación sobre qué hacer."
          },
          {
            "k": "Doy cierre",
            "t": "Al día siquiente: \"Ayer [nombre] planteó [tema]. [Lo resolví / esta es la actualización].\""
          }
        ],
        "phrases": [
          "\"¿Algo que quieran conversar antes de empezar?\"",
          "\"Ese tema lo veo yo esta semana. Vuelvo con respuesta.\"",
          "\"Eso es estructural — lo llevo a la mesa que corresponde. Te confirmo el jueves.\"",
          "\"La semana pasada [nombre] planteó [tema]. Esto es lo que se decidió.\""
        ],
        "no": [
          "Escuchar sin dar seguimiento — si el tema no se atiende, se repite.",
          "Prometer respuesta sin fecha.",
          "No cerrar el loop la siguiente semana con quien lo trajo."
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
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "award",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez al mes",
        "purpose": "Modelar visiblemente que Cultiva es para todos los niveles.",
        "context": {
          "freq": "1 vez al mes",
          "when": "3 min",
          "place": "Comité, reunión de equipo o mensaje grupal"
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
            "t": "en el momento oportuno: \"[Nombre], te felicito por [conducta], eso nos ayudó en [impacto].\""
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

  /* ---------------------------------------------------------- N2 */
  "prod-n2": {
    "id": "prod-n2",
    "area": "produccion",
    "level": "N2",
    "role": "Jefaturas (Riego / Sanidad / Fertirriego)",
    "sub": "Bisagra de sponsorship",
    "context": "Nivel de jefaturas (Riego, Sanidad, Fertirriego, Producción). Bisagra de sponsorship directo. Su variación clave frente a Cosecha: NOMBRAR el trabajo invisible, no corregirlo. El cascadeo de escucha pasa por aquí: clasifica y responde de vuelta.",
    "rituals": [
      {
        "id": "feedback-1-1-mensual",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "1 vez al mes",
        "purpose": "Desarrollar a un miembro de tu equipo mediante observación, pregunta y acuerdo concreto — modelo CIA integrado (Comportamiento o Problema · Impacto · Acuerdo).",
        "context": {
          "freq": "1 vez al mes",
          "when": "30 min",
          "place": "Caminata con el Supervisor/Coordinador"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "Identifico una conducta observada para corregir o potenciar."
          },
          {
            "k": "Me acerco",
            "t": "Con tono neutro, sin señal de corrección.3."
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
            "t": "Pregunto qué podría hacer para mejorar o llevar esa fortaleza al siguiente nivel."
          },
          {
            "k": "Acordamos",
            "t": "Definimos una acción concreta para poner en práctica."
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
          "\"Repíteme el acuerdo para asegurarnos de que quedamos igual.\"",
          "\"Antes de cerrar quiero reconocer que [conducta positiva]. Eso me da confianza.\""
        ],
        "no": [
          "Hablar de personas, no de hechos observados.",
          "Cerrar sin un acuerdo concreto.",
          "Saltarse el reconocimiento positivo al final.",
          "Convertirlo en monólogo de instrucciones.",
          "No volver a preguntar sobre el acuerdo en los días siguientes."
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
        "id": "revisar-escaladas-diarias",
        "kind": "escaladas",
        "dimension": "escucha",
        "icon": "inbox",
        "title": "Revisión de escaladas",
        "freq": "Diario",
        "from": "Jefes de Producción de área",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por los Jefes de Producción de área.",
        "purpose": "Detectar lo que se repite — dar destino institucional a lo que el Supervisor no puede resolver.",
        "steps": [
          {
            "k": "Reviso",
            "t": "el panel consolidado — busco patrones, no el detalle de cada tema."
          },
          {
            "k": "Identifico",
            "t": "qué temas estructurales requieren mi intervención o una decisión institucional."
          },
          {
            "k": "Doy destino",
            "t": "a lo estructural: resuelvo, derivo a RRLL/Ops o marco para seguimiento con fecha."
          },
          {
            "k": "Comunico",
            "t": "de vuelta a mi equipo mi decisión para que el loop cierre hacia abajo."
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
        "id": "espacio-de-confianza",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Diario",
        "purpose": "Recoger inquietudes antes de que se conviertan en problemas, fomentar la comunicación, cercanía y espacios seguros.",
        "context": {
          "when": "En espacios ya programados o existentes con tus reportes directos"
        },
        "steps": [
          {
            "k": "Abro",
            "t": "\"Cómo están?\" \"¿Algo que necesiten conversar antes de empezar?\""
          },
          {
            "k": "Espero",
            "t": "20-30 seg en silencio — la gente no responde de inmediato."
          },
          {
            "k": "Escucho",
            "t": "sin interrumpir. Si nadie habla: \"¿Cómo vienen hoy?\""
          },
          {
            "k": "Resuelvo",
            "t": "fomentando confianza y apertura"
          },
          {
            "k": "Retengo",
            "t": "Me quedo con la situación y su urgencia (Hoy / Esta semana) para darle seguimiento."
          },
          {
            "k": "Doy cierre",
            "t": "al día siguiente: \"Ayer [nombre] planteó [tema]. [Lo resolví / llega el día X].\""
          }
        ],
        "phrases": [
          "\"¿Cómo viene la semana? ¿Algo antes de arrancar?\"",
          "\"Ese tema lo resuelvo yo. Te confirmo el viernes.\"",
          "\"Eso no está en mis manos. Lo escalo a mi jefe — vuelvo con respuesta.\"",
          "\"La semana pasada [nombre] planteó [tema]. Así quedó.\""
        ],
        "no": [
          "Convertir el espacio en un reporte operativo del día.",
          "Escalar a mi jefe sin haber intentado resolverlo primero.",
          "No devolver la respuesta a quien lo trajo."
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
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "award",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez cada 2 semanas",
        "purpose": "Hacer visible quién está modelando Cultiva de manera oportuna.",
        "context": {
          "freq": "1 vez cada 2 semanas",
          "when": "3 min",
          "place": "Reunión de tu equipo"
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
            "t": "en el momento oportuno: \"[Nombre], te felicito por [conducta], eso nos ayudó en [impacto].\""
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
          "soporte": "App Cultiva — Plantilla de Reconocimiento (jefaturas)",
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
  "prod-n3": {
    "id": "prod-n3",
    "area": "produccion",
    "level": "N3",
    "role": "Jefe de Producción de Área",
    "sub": "La bisagra de Labores",
    "context": "La bisagra de Labores (Riego, Fertirriego, Sanidad, Producción). Equivale al Supervisor de Fundo en Cosecha, pero su foco es la CALIDAD del trabajo silencioso, no supervisar un equipo grande. Cierra escaladas <48 h y sostiene a quienes trabajan solos o expuestos.",
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
        "id": "coaching-de-terreno",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "2 Supervisores por semana",
        "purpose": "Desarrollar al Supervisor en terreno, en tiempo real, mediante observación, pregunta y acuerdo — modelo CIA integrado (Comportamiento o Problema · Impacto · Acuerdo).",
        "context": {
          "freq": "2 Supervisores por semana",
          "when": "20 min",
          "place": "En el lote, caseta o almacén durante la labor"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "noto en terreno cómo trabaja el Supervisor: sus decisiones, su trato al equipo, su presencia."
          },
          {
            "k": "Identifico",
            "t": "una conducta observada para corregir o potenciar."
          },
          {
            "k": "Comparto",
            "t": "Observé que [mencionar comportamiento o problema]. Esto generó [mencionar impacto]. ¿Qué acuerdo tomamos para corregirlo / potenciarlo?"
          },
          {
            "k": "Escucho",
            "t": "2 minutos sin interrumpir."
          },
          {
            "k": "Impulso",
            "t": "Pregunto qué podría hacer para mejorar o llevar esa fortaleza al siguiente nivel."
          },
          {
            "k": "Acordamos",
            "t": "Definimos una acción concreta para poner en práctica."
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
          "\"Vi [comportamiento o problema]. ¿Qué acuerdo tomamos para mejorarlo?\"",
          "\"Sin [entregable] no podemos [impacto operativo].\"",
          "\"Cuando tengas ese inconveniente, no olvides que puedes llamarme.\"",
          "\"Antes de irme quiero reconocer que [conducta positiva]. Eso marca la diferencia.\""
        ],
        "no": [
          "Corregir antes de observar.",
          "Dar la solución — es desarrollo, no instrucción.",
          "Hacer el acompañamiento en grupo — siempre es 1:1.",
          "Irse sin un acuerdo concreto.",
          "Saltarse el reconocimiento al cerrar.",
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
              "k": "conducta",
              "l": "Conducta observada en terreno",
              "t": "area"
            },
            {
              "k": "pregunta",
              "l": "Pregunta",
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
        "id": "revisar-escaladas-diarias",
        "kind": "escaladas",
        "dimension": "escucha",
        "icon": "inbox",
        "title": "Revisión de escaladas",
        "freq": "Diario",
        "from": "Supervisores",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por los Supervisores.",
        "purpose": "Detectar lo que se repite — dar destino institucional a lo que el Jefe no puede resolver.",
        "steps": [
          {
            "k": "Reviso",
            "t": "el panel consolidado — busco patrones, no el detalle de cada tema."
          },
          {
            "k": "Identifico",
            "t": "qué temas estructurales requieren mi intervención o una decisión institucional."
          },
          {
            "k": "Doy destino",
            "t": "a lo estructural: resuelvo, derivo a RRLL/Ops o marco para seguimiento con fecha."
          },
          {
            "k": "Comunico",
            "t": "de vuelta a mi equipo mi decisión para que el loop cierre hacia abajo."
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
        "id": "espacio-de-confianza",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Semanal",
        "purpose": "Recoger inquietudes antes de que se conviertan en problemas, fomentar la comunicación, cercanía y espacios seguros.",
        "context": {
          "freq": "Semanal",
          "when": "En espacios ya programados o existentes con tus reportes directos"
        },
        "steps": [
          {
            "k": "Abro",
            "t": "\"¿Cómo están? ¿Algo que necesiten conversar antes de empezar?\""
          },
          {
            "k": "Espero",
            "t": "20-30 seg en silencio — la gente no responde de inmediato."
          },
          {
            "k": "Escucho",
            "t": "sin interrumpir. Si nadie habla: \"¿Cómo vienen hoy?\""
          },
          {
            "k": "Resuelvo",
            "t": "fomentando confianza y apertura."
          },
          {
            "k": "Retengo",
            "t": "Me quedo con la situación y su urgencia (Hoy / Esta semana) para darle seguimiento."
          },
          {
            "k": "Doy cierre",
            "t": "al día siguiente: \"Ayer [nombre] planteó [tema]. [Lo resolví / llega el día X].\""
          }
        ],
        "phrases": [
          "\"¿Cómo van con su personal? ¿Necesitan algo?\"",
          "\"Revisemos si podemos redistribuir: puedes mover [recurso] de [A] a [B].\"",
          "\"Ese tema lo veo yo — te aviso mañana.\""
        ],
        "no": [
          "Prometer a tu equipo lo que no puedes cumplir.",
          "Escalar a mi jefe sin contexto — no puede actuar sobre algo que no entiende.",
          "No cerrar el loop con quien lo trajo."
        ],
        "note": "También puedes aplicarlo 1:1. En privado el equipo se abre más.",
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
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "award",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez por semana",
        "purpose": "Hacer visible que la conducta positiva se observa y se nombra de manera oportuna.",
        "context": {
          "freq": "1 vez por semana",
          "when": "En grupo"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "conscientemente a los Supervisores de Producción que destaquen en conducta o rendimiento durante el período."
          },
          {
            "k": "Anoto",
            "t": "la conducta específica y el impacto que tuvo para el equipo o la operación."
          },
          {
            "k": "Nombro",
            "t": "en el momento oportuno frente al grupo: \"[Nombre], te felicito por [conducta] — eso nos ayudó en [impacto].\""
          }
        ],
        "phrases": [
          "\"[Nombre], quiero felicitarte. Te diste cuenta a tiempo de [conducta], y eso impacta directamente en [impacto]. Gracias por tu atención.\"",
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
  "prod-n4": {
    "id": "prod-n4",
    "area": "produccion",
    "level": "N4",
    "role": "Supervisor de Producción",
    "sub": "Donde arranca el cascadeo",
    "context": "La capa donde la métrica se mueve (Riego, Fertirriego, Sanidad, Producción). Caso límite: RIEGO opera a distancia, sin equipo presencial. Aquí ARRANCA el cascadeo de escucha. El check-in y el reconocimiento cambian de verbo según la sub-área, pero el principio es el mismo.",
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
        "id": "presencia-activa-en-campo",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "Diario",
        "purpose": "Acompañar en el momento: reconocer el avance, señalar la desviación puntual explicando el porqué, pedir compromiso de corrección y verificar que se haga.",
        "context": {
          "freq": "Diario",
          "when": "En movimiento por el área durante la jornada"
        },
        "steps": [
          {
            "k": "Recorro y saludo",
            "t": "reconozco el avance cuando lo hay."
          },
          {
            "k": "Señalo la desviación puntual",
            "t": "concreta y sin rodeos: \"Veo que [desviación].\""
          },
          {
            "k": "Explico el porqué",
            "t": "el impacto técnico (plagas, nutrientes, deshidratación de la fruta, enfermedades, etc.)."
          },
          {
            "k": "Pido compromiso",
            "t": "\"¿Cuento contigo con esa corrección?\" / \"¿Te parece si lo corregimos de inmediato?\""
          },
          {
            "k": "Verifico",
            "t": "pido que me avisen al corregir o anuncio que volveré a revisar el trabajo."
          }
        ],
        "phrases": [
          "\"Veo que vienes avanzando bien. Sin embargo, [desviación puntual].\"",
          "\"Recuerda que [impacto técnico]: por eso [acción correcta].\"",
          "\"¿Cuento contigo con esa corrección?\"",
          "\"Corrige esto y avísame apenas lo hayas hecho, ¿te parece?\"",
          "\"Volveré en unos minutos para ver tu trabajo, ¿te parece?\""
        ],
        "no": [
          "Aparecer solo cuando hay un problema (eso lo convierte en ronda de control).",
          "Señalar la desviación sin explicar el porqué.",
          "Corregir en público frente al grupo.",
          "No verificar que la corrección se haya hecho."
        ],
        "registro": {
          "hidden": true
        }
      },
      {
        "id": "escucha-antes-de-iniciar",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Diario",
        "purpose": "Recoger inquietudes antes de que se conviertan en problemas — y escalar con criterio.",
        "context": {
          "freq": "Diario",
          "when": "Post-charla diaria",
          "place": "Punto de reunión con el equipo"
        },
        "steps": [
          {
            "k": "Abro",
            "t": "\"¿Hay algo que deba conocer antes de iniciar labores?\""
          },
          {
            "k": "Espero",
            "t": "20-30 seg en silencio."
          },
          {
            "k": "Escucho",
            "t": "sin interrumpir."
          },
          {
            "k": "Me hago disponible",
            "t": "si no estoy cerca, dejo claro que pueden llamarme con confianza."
          },
          {
            "k": "Decido",
            "t": "para cada tema: ¿resuelvo yo o escalo?"
          },
          {
            "k": "Retengo",
            "t": "Me quedo con la situación y su urgencia (Hoy / Esta semana)."
          },
          {
            "k": "Doy cierre",
            "t": "al día siguiente con quien lo trajo."
          }
        ],
        "phrases": [
          "\"¿Hay algo que deba conocer antes de iniciar labores?\"",
          "\"Si no estoy cerca, llámenme con confianza. Prefiero una llamada a tiempo que un error que podamos evitar.\"",
          "\"Ese tema lo resuelvo yo hoy. Te aviso al almuerzo.\""
        ],
        "no": [
          "Prometer lo que no puedes cumplir.",
          "Escalar sin escribir contexto suficiente — el superior no puede actuar sobre algo que no entiende.",
          "No cerrar el loop al día siguiente con quien habló."
        ],
        "note": "También puedes aplicarlo 1:1. En privado el equipo se abre más.",
        "registro": {
          "soporte": "Escalada vía app",
          "autoBroadcast": {
            "temaFijo": "Espacio de confianza",
            "detalle": "contexto"
          },
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
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "award",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez por semana",
        "purpose": "Hacer visible que la conducta positiva se observa y se nombra de manera oportuna.",
        "context": {
          "freq": "1 vez por semana",
          "when": "En grupo"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "conscientemente a los trabajadores del área que destaquen en conducta o rendimiento durante el período."
          },
          {
            "k": "Anoto",
            "t": "la conducta específica y el impacto que tuvo para el equipo o la operación."
          },
          {
            "k": "Nombro",
            "t": "en el momento oportuno frente al grupo: \"[Nombre], te felicito por [conducta] — eso nos ayudó en [impacto].\""
          }
        ],
        "phrases": [
          "\"[Nombre], te felicito. Ayer vi que [conducta de ayuda o actitud]. Eso dice mucho de ti como persona. Gracias.\"",
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
      },
      {
        "id": "cierre-con-agradecimiento",
        "kind": "light",
        "dimension": "lidera",
        "icon": "sunset",
        "title": "Cierre con agradecimiento",
        "freq": "Diario",
        "reminder": "Al cierre de la jornada no olvides agradecer a tu equipo por el esfuerzo realizado.",
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
  }

});

/* índice área → perfiles (extiende el de data-cosecha.js) */
window.PROFILES_BY_AREA.produccion =
  ["prod-n1", "prod-n2", "prod-n3", "prod-n4"].map(function (id) { return window.PROFILES[id]; });

/* datos demo de la bandeja de escaladas (cascadeo de Labores) */
Object.assign(window.ESCALADAS_DEMO, {
  "prod-n1": [
    {
      "id": "e1", "from": "Víctor Pais", "role": "Jefe de Riego",
      "tema": "Estructural · turnos",
      "detalle": "El turno noche de riego queda con un solo operador en caseta; si falla algo, no hay relevo presencial en todo el sector.",
      "requiere": "Autorización para un segundo operador nocturno o un esquema de guardia compartida entre casetas.",
      "date": 1782007510069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Takeda Herrera", "role": "Jefe de Sanidad",
      "tema": "Exposición / EPP",
      "detalle": "Parte del EPP de aplicación llegó al límite de vida útil; los aplicadores siguen saliendo igual.",
      "requiere": "Que se priorice la reposición de EPP con compras antes de la próxima ventana de aplicación.",
      "date": 1781949910069, "status": null, "thread": []
    }
  ],
  "prod-n2": [
    {
      "id": "e1", "from": "Percy Villegas", "role": "Jefe de Producción de Área",
      "tema": "Falta de relevo",
      "detalle": "Premezcla sostuvo la semana con una persona menos por descanso médico; el equipo está al límite.",
      "requiere": "Apoyo temporal o redistribución de carga mientras dura la baja.",
      "date": 1782011110069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Alex Vásquez", "role": "Jefe de Fertirriego",
      "tema": "Señal débil · fatiga",
      "detalle": "Un operador de fertirriego acumula varios turnos seguidos; aún cumple, pero se le nota agotado.",
      "requiere": "Validar si corresponde un día de descanso antes de que escale a un problema mayor.",
      "date": 1781942710069, "status": null, "thread": []
    }
  ],
  "prod-n3": [
    {
      "id": "e1", "from": "Rosa Marín", "role": "Supervisora de Riego",
      "tema": "Soledad de turno",
      "detalle": "El operador de la caseta 4 lleva tres turnos solo y comentó que se siente aislado en la noche.",
      "requiere": "Una conversación de carga y, si se puede, rotarlo unos días con otra caseta.",
      "date": 1782010110069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Hugo Pérez", "role": "Supervisor de Sanidad",
      "tema": "Exposición física",
      "detalle": "Dos aplicadores reportan que el horario de aplicación coincide con el pico de calor.",
      "requiere": "Evaluar mover la ventana de aplicación a primera hora.",
      "date": 1781990110069, "status": null, "thread": []
    },
    {
      "id": "e3", "from": "Lucía Ato", "role": "Supervisora de Producción",
      "tema": "Premezcla a tiempo",
      "detalle": "La premezcla salió justa dos días seguidos por un insumo que llega tarde del almacén.",
      "requiere": "Coordinar con almacén la entrega anticipada del insumo.",
      "date": 1781921110069, "status": null, "thread": []
    }
  ]
});
