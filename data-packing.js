/* ============================================================
   DATA · KIT CULTIVA — OPERACIONES INDUSTRIALES (PACKING) · N1–N4
   Reconstruido (21/06/2026) desde "Kit Cultiva por Perfil v5.1.xlsx"
   — fichas por perfil (hojas 9–12) + hoja "Resumen rituales — multiárea".
   Se inyecta sobre las estructuras creadas en data-cosecha.js.
   Regla del área: LA NOCHE EXISTE Y TIENE AUTORIDAD EQUIVALENTE AL DÍA;
   todo ritual de día tiene su gemelo de noche.
   ============================================================ */

Object.assign(window.PROFILES, {

  /* ---------------------------------------------------------- N1 */
  "pack-n1": {
    "id": "pack-n1",
    "area": "packing",
    "level": "N1",
    "role": "Gerencia de Operaciones Industriales",
    "sub": "La noche tiene autoridad",
    "context": "Sponsor del piloto en Packing (plantas Chao y Salaverry, día y noche). La regla de oro: LA NOCHE EXISTE Y TIENE AUTORIDAD EQUIVALENTE AL DÍA. Si el sponsor solo aparece de día, el mensaje es que la noche no importa.",
    "rituals": [
      {
        "id": "feedback-1-1-mensual",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "Mensual",
        "purpose": "Desarrollar a un miembro de tu equipo mediante observación, pregunta y acuerdo concreto — modelo CIA integrado (Comportamiento o Problema · Impacto · Acuerdo).",
        "context": {
          "freq": "1 vez al mes por persona (día y noche)",
          "when": "30-45 min",
          "place": "Oficina o caminata por planta (Momento no operativo)"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "Identifico una conducta observada para corregir o potenciar."
          },
          {
            "k": "Me acerco",
            "t": "Con tono neutro, sin señal de corrección."
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
              "k": "turno",
              "l": "Turno",
              "t": "sel",
              "o": [
                "Día",
                "Noche"
              ]
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
              "k": "acuerdo",
              "l": "Acuerdo",
              "t": "area"
            },
            {
              "k": "fecha",
              "l": "Fecha seguimiento",
              "t": "date"
            }
          ]
        }
      },
      {
        "id": "caminata-dia-noche",
        "kind": "full",
        "dimension": "lidera",
        "icon": "footprints",
        "title": "Caminata de Liderazgo",
        "freq": "Bimensual",
        "purpose": "Hacer presencia ejecutiva visible en AMBOS turnos — la noche tiene autoridad equivalente al día.",
        "context": {
          "freq": "1 recorrido de día + 1 de noche por planta (bimensual)",
          "when": "Ambos turnos",
          "place": "En la línea durante la operación"
        },
        "steps": [
          {
            "k": "Programo",
            "t": "el recorrido diurno/nocturno en horario real de operación."
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
            "t": "con una promesa cumplible."
          },
          {
            "k": "Anuncio",
            "t": "que volveré."
          }
        ],
        "phrases": [
          "\"Vine porque quería ver cómo va el turno.\"",
          "\"De día esto no se nota. Ustedes lo sostienen.\"",
          "\"Esto que me cuentas lo reviso y vuelvo con respuesta.\""
        ],
        "no": [
          "Recorrer solo el turno día y reportar 'la planta'.",
          "No saludar por nombre.",
          "Convertir la caminata en inspección o auditoría."
        ],
        "registro": {
          "soporte": "Registro de visita en planta",
          "fields": [
            {
              "k": "planta",
              "l": "Planta",
              "t": "text"
            },
            {
              "k": "turno",
              "l": "Turno",
              "t": "sel",
              "o": [
                "Día",
                "Noche"
              ]
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
        "id": "espacio-de-confianza",
        "kind": "full",
        "dimension": "escucha",
        "icon": "ear",
        "title": "Espacio de confianza",
        "freq": "Semanal",
        "purpose": "Recoger inquietudes antes de que se conviertan en problemas, fomentar la comunicación, cercanía y espacios seguros.",
        "context": {
          "when": "en espacios ya programados o existentes con tus reportes directos"
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
            },
            {
              "k": "turno",
              "l": "Turno",
              "t": "sel",
              "o": [
                "Día",
                "Noche"
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
        "freq": "Diario (ambos turnos)",
        "from": "Jefes de Planta",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por los Jefes de Planta (día y noche).",
        "purpose": "Detectar lo que se repite en ambos turnos — dar destino institucional a lo que el Jefe no puede resolver.",
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
          "\"Este patrón no es de planta — es sistémico. Lo trabajo yo.\"",
          "\"Lo derivo a RRLL con instrucción clara y fecha.\"",
          "\"Comunico al N2 mi decisión para que llegue al equipo.\""
        ],
        "no": [
          "Revisar el panel como si fuera un reporte operativo.",
          "Dejar temas estructurales sin dueño ni fecha.",
          "No cerrar el loop hacia abajo con la decisión tomada."
        ],
        "context": {
          "freq": "Diario (ambos turnos)",
          "when": "Al cierre de cada turno"
        }
      },
      {
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "moon-star",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez al mes",
        "purpose": "Modelar que Cultiva es para todos los niveles — incluido el turno noche.",
        "context": {
          "freq": "1 vez al mes",
          "when": "Durante las caminatas",
          "place": "En ambos turnos"
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
  "pack-n2": {
    "id": "pack-n2",
    "area": "packing",
    "level": "N2",
    "role": "Jefe de Planta",
    "sub": "Jefatura + bisagra",
    "context": "El Jefe de Planta opera como jefatura Y como bisagra en el piloto (Chao y Salaverry, + turnos de noche). Arriba recibe desarrollo del sub-gerente y desarrolla a sus líderes (SCI); abajo hace coaching en línea al Supervisor de Planta/Control. Todo ritual de día tiene su gemelo de noche.",
    "rituals": [
      {
        "id": "feedback-1-1-mensual",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "Mensual",
        "purpose": "Desarrollar a un miembro de tu equipo mediante observación, pregunta y acuerdo concreto — modelo CIA integrado (Comportamiento o Problema · Impacto · Acuerdo).",
        "context": {
          "freq": "1 vez al mes por persona (día y noche)",
          "when": "Momento no operativo",
          "place": "Ambos turnos"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "Identifico una conducta observada para corregir o potenciar."
          },
          {
            "k": "Me acerco",
            "t": "Inicio una conversación breve y cercana."
          },
          {
            "k": "Comparto",
            "t": "\"Observé que [mencionar comportamiento o problema]. Esto generó [mencionar impacto]. ¿Qué acuerdo tomamos para corregirlo / potenciarlo?\""
          },
          {
            "k": "Escucho",
            "t": "Dejo que reflexione antes de responder."
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
            "k": "Reconozco",
            "t": "Agradezco su apertura y compromiso."
          },
          {
            "k": "Hago seguimiento",
            "t": "Retomo la conversación para revisar cómo le fue."
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
              "k": "turno",
              "l": "Turno",
              "t": "sel",
              "o": [
                "Día",
                "Noche"
              ]
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
              "k": "acuerdo",
              "l": "Acuerdo",
              "t": "area"
            },
            {
              "k": "fecha",
              "l": "Fecha seguimiento",
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
          "Convertir el espacio en un reporte operativo del turno.",
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
            },
            {
              "k": "turno",
              "l": "Turno",
              "t": "sel",
              "o": [
                "Día",
                "Noche"
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
        "freq": "Semanal (ambos turnos)",
        "from": "Jefes de Producción de Planta",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por los Jefes de Producción (día y noche).",
        "purpose": "Primer nivel de visión consolidada — detectar patrones en ambos turnos.",
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
          "freq": "Semanal (ambos turnos)",
          "when": "Al cierre de cada turno"
        }
      },
      {
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "moon-star",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez cada 2 semanas",
        "purpose": "Hacer visible quién está modelando Cultiva — sin importar el turno.",
        "context": {
          "freq": "1 vez cada 2 semanas",
          "when": "3 min",
          "place": "Reunión de equipo · Día y noche por separado"
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
  "pack-n3": {
    "id": "pack-n3",
    "area": "packing",
    "level": "N3",
    "role": "Jefe de Producción de Planta",
    "sub": "Eslabón N3 del cascadeo",
    "context": "Nivel N3 de Operaciones Industriales (Packing). Reporta al Jefe de Planta (N2). Hay un Jefe de Producción por turno: uno de día y uno de noche. Su variación clave: el turno noche debe ESCALAR con la misma autoridad que el día (no solo reportar) y el relevo se sostiene con el cuaderno de relevo.",
    "rituals": [
      {
        "id": "coaching-en-terreno",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "2 Supervisores al mes",
        "purpose": "Desarrollar al Supervisor en terreno, en tiempo real, mediante observación, pregunta y acuerdo — modelo CIA integrado (Comportamiento o Problema · Impacto · Acuerdo).",
        "context": {
          "freq": "2 Supervisores al mes",
          "when": "20 min",
          "place": "Ambos turnos · En planta"
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
          "\"¿Qué necesitas de mí para que esto salga mejor?\"",
          "\"Repíteme el acuerdo para asegurarnos de que quedamos igual.\"",
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
              "k": "turno",
              "l": "Turno",
              "t": "sel",
              "o": [
                "Día",
                "Noche"
              ]
            },
            {
              "k": "conducta",
              "l": "Conducta observada",
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
              "l": "Fecha seguimiento",
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
          "\"¿Cómo viene la semana? ¿Algo que necesite saber?\"",
          "\"Ese tema lo veo yo — te aviso en el próximo turno.\"",
          "\"Eso no está en mis manos. Lo escalo a mi jefe — vuelvo esta semana.\"",
          "\"El lunes [nombre] planteó [tema]. Así quedó.\""
        ],
        "no": [
          "Prometer a tu equipo lo que no puedes cumplir.",
          "Escalar a mi jefe sin contexto — no puede actuar sobre algo que no entiende.",
          "No cerrar el loop con quien lo trajo."
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
            },
            {
              "k": "turno",
              "l": "Turno",
              "t": "sel",
              "o": [
                "Día",
                "Noche"
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
        "freq": "Diario (ambos turnos)",
        "from": "Supervisores de Planta / Control",
        "reminder": "Al cierre del día, sentarse a revisar los temas escalados por los Supervisores (día y noche).",
        "purpose": "Que el Supervisor sepa que escalar tiene sentido — respuesta en menos de 48 horas.",
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
          "freq": "Diario (ambos turnos)",
          "when": "Al cierre de cada turno"
        }
      },
      {
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "moon-star",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez al mes",
        "purpose": "Hacer visible quién está modelando Cultiva — sin importar el turno.",
        "context": {
          "freq": "1 vez al mes",
          "when": "3 min",
          "place": "Reunión del equipo · Ambos turnos"
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
        }
      }
    ]
  },

  /* ---------------------------------------------------------- N4 */
  "pack-n4": {
    "id": "pack-n4",
    "area": "packing",
    "level": "N4",
    "role": "Supervisor de Producción",
    "sub": "Donde arranca el cascadeo",
    "context": "La capa donde la métrica se mueve en Packing (1 supervisor por planta + 1 control en planta Chao, día y noche). Los rituales se apalancan en momentos que YA existen (la charla de 5 min, la pausa del turno, el relevo). En noche, todo se hace con autoridad equivalente y el registro queda en el cuaderno de relevo.",
    "rituals": [
      {
        "id": "saludo-con-proposito",
        "kind": "light",
        "dimension": "lidera",
        "icon": "sunrise",
        "title": "Saludo con propósito",
        "freq": "Diario (ambos turnos)",
        "reminder": "Al inicio del turno no olvides saludar a tu equipo con energía para iniciar bien la jornada.",
        "hasDone": true,
        "purpose": "Al inicio de cada turno (día y noche) no olvides saludar a tu equipo con energía.",
        "context": {
          "freq": "Diario (ambos turnos)",
          "when": "Inicio de turno"
        },
        "registro": {
          "hidden": true
        }
      },
      {
        "id": "presencia-activa-en-planta",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "Diario (ambos turnos)",
        "purpose": "Acompañar en las líneas (ambos turnos): reconocer el avance, señalar la desviación con su impacto en el cliente, desarrollar al líder a cargo para que haga su propio acompañamiento y tratar la seguridad como no negociable.",
        "context": {
          "freq": "Diario (ambos turnos)",
          "place": "En movimiento por las líneas durante el turno"
        },
        "steps": [
          {
            "k": "Recorro las líneas",
            "t": "en ambos turnos, no solo donde hay problemas."
          },
          {
            "k": "Observo y reconozco el avance",
            "t": "\"Veo que tu línea avanza con buen ritmo.\""
          },
          {
            "k": "Señalo la desviación con su impacto",
            "t": "\"Están reportando [desviación], y esa calificación es la calidad que le llega al cliente.\""
          },
          {
            "k": "Desarrollo al líder a cargo",
            "t": "le pido que haga su propio acompañamiento 1 a 1, saque muestreo e identifique de dónde vienen las desviaciones, en vez de resolverlo yo."
          },
          {
            "k": "En seguridad, no negocio",
            "t": "si falta un EPP, lo corrijo en el momento: \"por tu seguridad y bienestar\"."
          },
          {
            "k": "Cierro pidiendo retorno",
            "t": "\"¿Me comentas una vez corregido?\""
          }
        ],
        "phrases": [
          "\"Veo que tu línea avanza con buen ritmo. Sin embargo, [desviación], y esa calificación es la calidad que llega al cliente.\"",
          "\"Haz acompañamiento 1 a 1 con tu equipo: saca el muestreo e identifica de dónde vienen las desviaciones.\"",
          "\"Ellos deben verte como su líder: acompáñalos y oriéntalos cuando algo no sale bien.\"",
          "\"Te pido que uses tu EPP por tu propia seguridad y bienestar. No ejecutamos labores sin EPP.\"",
          "\"¿Me comentas una vez corregido?\""
        ],
        "no": [
          "Aparecer solo cuando hay un problema en la línea.",
          "Resolver por el líder lo que él debe acompañar con su equipo.",
          "Corregir en público frente al equipo.",
          "Dejar pasar una falta de EPP.",
          "Tratar el turno noche como turno de segunda."
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
        "freq": "Diario (ambos turnos)",
        "purpose": "Recoger inquietudes antes de que se conviertan en problemas — y escalar con criterio.",
        "context": {
          "freq": "Diario (ambos turnos)",
          "when": "Al inicio de turno",
          "place": "Post-charla operativa"
        },
        "steps": [
          {
            "k": "Abro",
            "t": "\"¿Tienen alguna consulta, duda o inquietud?\""
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
            "k": "Decido",
            "t": "para cada tema: ¿resuelvo yo o escalo?"
          },
          {
            "k": "Me comprometo con seguimiento",
            "t": "si depende de otra área, lo verifico y pido que me lo recuerden para retomarlo."
          },
          {
            "k": "Retengo",
            "t": "Me quedo con la situación y su urgencia (Hoy / Esta semana)."
          },
          {
            "k": "Doy cierre",
            "t": "retomo el tema en el siguiente espacio."
          }
        ],
        "phrases": [
          "\"¿Tienen alguna consulta, duda o inquietud?\"",
          "\"Voy a verificar con el área correspondiente. Mañana me lo recuerdan para volver a tocarlo aquí.\"",
          "\"Ese tema lo resuelvo yo en este turno. Te aviso antes del cierre.\""
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
            },
            {
              "k": "turno",
              "l": "Turno",
              "t": "sel",
              "o": [
                "Día",
                "Noche"
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
        "purpose": "Hacer visible que la conducta positiva se observa y se nombra — en ambos turnos.",
        "context": {
          "freq": "1 vez por semana",
          "when": "En grupo"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "conscientemente a los trabajadores de su turno que destaquen en conducta o rendimiento durante el período."
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
          "\"Quiero felicitar a [persona o grupo] por [conducta]. Gracias a ustedes [impacto]. Eso refleja su compromiso.\"",
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
        "freq": "Diario (ambos turnos)",
        "reminder": "Al cierre del turno (ambos) no olvides agradecer a tu equipo por el esfuerzo realizado.",
        "hasDone": true,
        "purpose": "Al cierre del turno (día y noche) no olvides agradecer a tu equipo.",
        "context": {
          "freq": "Diario (ambos turnos)",
          "when": "Cierre de turno"
        },
        "registro": {
          "hidden": true
        }
      }
    ]
  }

});

/* Control de Línea (N4 Packing): mismo puesto que el Supervisor de Producción
   pero SIN el ritual de escucha ("Espacio de confianza"). Se deriva de pack-n4
   para no duplicar contenido; comparte los demás rituales. Perfil para el padrón
   de Control de Línea: "pack-n4-cl". */
(function () {
  var _p4 = window.PROFILES["pack-n4"];
  var _byId = function (id) { return _p4.rituals.filter(function (r) { return r.id === id; })[0]; };
  window.PROFILES["pack-n4-cl"] = Object.assign({}, _p4, {
    id: "pack-n4-cl",
    role: "Control de Línea",
    rituals: [
      _byId("saludo-con-proposito"),
      {
        "id": "presencia-activa-en-planta",
        "kind": "full",
        "dimension": "lidera",
        "icon": "message-square-quote",
        "title": "Acompañamiento 1 a 1",
        "freq": "Diario (ambos turnos)",
        "purpose": "Acompañar a la línea en el momento: ante la duda, medir con muestreo (no buscar culpables) y corregir con evidencia; la seguridad no se negocia.",
        "context": {
          "freq": "Diario (ambos turnos)",
          "place": "En la línea durante el turno"
        },
        "steps": [
          {
            "k": "Observo la línea",
            "t": "noto si están pasando defectos o desviaciones."
          },
          {
            "k": "No busco culpables",
            "t": "\"No busco un responsable, quiero entender qué está pasando.\""
          },
          {
            "k": "Mido",
            "t": "propongo un muestreo para revisar la línea completa."
          },
          {
            "k": "Muestro la evidencia",
            "t": "comparto el resultado y pido corregir donde el dato lo señala."
          },
          {
            "k": "En seguridad, no negocio",
            "t": "si falta un EPP, lo corrijo en el momento: \"por tu seguridad y bienestar\"."
          }
        ],
        "phrases": [
          "\"Veo que están pasando algunos [defectos]. No busco un responsable, quiero entender qué pasa.\"",
          "\"¿Les parece si hago un muestreo para revisar la línea completa?\"",
          "\"El muestreo confirma que están pasando defectos en varios puntos; retiremos con mayor atención.\"",
          "\"Te pido que uses tu EPP por tu propia seguridad y bienestar. No ejecutamos labores sin EPP.\""
        ],
        "no": [
          "Buscar culpables antes de medir.",
          "Discutir opiniones en vez de mostrar el dato del muestreo.",
          "Exponer a una persona al corregir frente al grupo.",
          "Dejar pasar una falta de EPP."
        ],
        "registro": {
          "hidden": true
        }
      },
      {
        "id": "reconocimiento",
        "kind": "full",
        "dimension": "valora",
        "icon": "award",
        "title": "Reconocimiento Sincero",
        "freq": "1 vez por semana",
        "purpose": "Hacer visible que la conducta positiva se observa y se nombra — en ambos turnos.",
        "context": {
          "freq": "1 vez por semana",
          "when": "En grupo"
        },
        "steps": [
          {
            "k": "Observo",
            "t": "conscientemente a los trabajadores de su turno que destaquen en conducta o rendimiento durante el período."
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
          "\"Quiero felicitar a [nombre] porque [enseñó o apoyó al equipo]. Gracias a eso [impacto en la línea].\"",
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
      _byId("cierre-con-agradecimiento"),
    ],
  });
})();

/* índice área → perfiles (extiende el de data-cosecha.js) */
window.PROFILES_BY_AREA.packing =
  ["pack-n1", "pack-n2", "pack-n3", "pack-n4", "pack-n4-cl"].map(function (id) { return window.PROFILES[id]; });

/* datos demo de la bandeja de escaladas (cascadeo de Packing · día/noche) */
Object.assign(window.ESCALADAS_DEMO, {
  "pack-n1": [
    {
      "id": "e1", "from": "Marco Ríos", "role": "Líder de Planta · Noche (Chao)",
      "tema": "Estructural · dotación noche",
      "detalle": "El turno noche sostuvo la línea con dos personas menos por inasistencias; aguantó, pero no es sostenible otra semana.",
      "requiere": "Decisión sobre refuerzo nocturno o reprogramación de la meta de la noche.",
      "date": 1782011110069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Carla Ruiz", "role": "Líder de Planta · Día (Salaverry)",
      "tema": "Criticidad · cambio de formato",
      "detalle": "El cambio de formato entre líneas está tomando el doble de tiempo y arrastra a ambos turnos.",
      "requiere": "Definir un estándar de cambio de formato con dueño y plazo.",
      "date": 1781949910069, "status": null, "thread": []
    }
  ],
  "pack-n2": [
    {
      "id": "e1", "from": "Diego Salas", "role": "Jefe de Producción · Noche",
      "tema": "Relevo · información perdida",
      "detalle": "Una escalada de calidad de la noche no llegó al turno día porque no quedó en el cuaderno de relevo.",
      "requiere": "Reforzar el uso del cuaderno de relevo y cerrar el tema de calidad pendiente.",
      "date": 1782010110069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Ana Cueva", "role": "Jefe de Producción · Día",
      "tema": "Carga del turno",
      "detalle": "Dos supervisores de día encadenaron turnos largos por la campaña; se nota el desgaste.",
      "requiere": "Validar descansos y posible rotación antes de que afecte la línea.",
      "date": 1781990110069, "status": null, "thread": []
    }
  ],
  "pack-n3": [
    {
      "id": "e1", "from": "Luis Tapia", "role": "Supervisor de Control · Noche",
      "tema": "Señal de línea",
      "detalle": "La selectora de la línea 2 da intermitencias en la madrugada; aún no para, pero baja el ritmo.",
      "requiere": "Coordinar mantenimiento antes del siguiente turno noche.",
      "date": 1782010110069, "status": null, "thread": []
    },
    {
      "id": "e2", "from": "Sofía Núñez", "role": "Supervisora de Planta · Día",
      "tema": "Persona nueva sin inducción",
      "detalle": "Llegaron dos personas nuevas a la línea sin la charla de inducción de seguridad.",
      "requiere": "Coordinar la inducción antes de que sigan operando.",
      "date": 1781921110069, "status": null, "thread": []
    }
  ]
});
