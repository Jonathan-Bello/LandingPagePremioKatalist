import React, { useState } from "react";
import "./Section4.css";
import Modal from "../Modal";

const Section4 = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  function handleShowModal2() {
    setShowModal2(true);
  }

  function handleHideModal2() {
    setShowModal2(false);
  }

  return (
    <section className="section4">
      <div className="s-main-center s-cross-center">
        <p className="section4__slogan">
          Activa katalyst te invita a este proyecto intercomunitario
        </p>
      </div>

      <img
        src={"https://activa.org.mx/wp-content/uploads/2023/04/marcas.png"}
        alt="marcas"
        className="section4__marcas"
      />

      <div className="footer__links">
        <a onClick={handleShowModal}>TÉRMINOS Y CONDICIONES</a>
        <a onClick={handleShowModal2}>AVISO DE PRIVACIDAD</a>
      </div>

      {showModal && (
        <Modal onClose={handleHideModal}>
          <div className="modal__content">
            <h3>TÉRMINOS Y CONDICIONES</h3>
            <p>
              FUNDACIÓN ACTIVA A.C. / “Emprendedor Katalyst del Año” - Términos
              y Condiciones para la aplicación al programa.
            </p>
            <h3>ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES</h3>
            <p>
              La lectura y aceptación de los presentes TÉRMINOS Y CONDICIONES DE
              USO (en adelante, los “Términos de Uso”) es condición necesaria
              para la aplicación al programa denominado Emprendedor Katalyst del
              Año. Los Términos de Uso establecen las Condiciones Generales de
              aplicación, constituyen un contrato entre el usuario y FUNDACIÓN
              ACTIVA A.C., por lo que rigen la relación entre estos. La
              aplicación al presente programa y sus servicios implica la plena
              aceptación de las disposiciones incluidas en estos Términos de Uso
              conforme a la versión publicada por FUNDACIÓN ACTIVA A.C. en el
              momento en que el Usuario aplique al programa. El uso y aplicación
              al programa Emprendedor Katalyst del Año y los demás programas de
              FUNDACIÓN ACTIVA A.C. puede encontrarse sometida a CONDICIONES
              PARTICULARES propias que, según los casos, sustituyen, remplazan,
              alteran y/o completan los presentes Términos de Uso. Por lo tanto,
              con anterioridad a la utilización de dichos servicios, el Usuario
              también ha de leer atentamente y aceptar asimismo las
              correspondientes condiciones particulares, en su caso. Las
              notificaciones sobre cambios a las condiciones del/los programas
              correspondientes serán publicadas en los sitios oficiales del
              programa y de FUNDACIÓN ACTIVA A.C. Si usted no está de acuerdo
              con las modificaciones a las condiciones de estos o cualquier otro
              servicio que se ofrece, deberá interrumpir la aplicación al
              programa.
            </p>
            <h3>FINALIDAD</h3>
            <p>
              El objetivo principal de este programa es brindar el apoyo a
              empresas que buscan crecer y generar empleos para personas
              desfavorecidas. A través de este programa, FUNDACIÓN ACTIVA A.C.
              busca contribuir al desarrollo económico y social de las
              comunidades alrededor del país. Este programa busca otorgar un
              donativo a empresas con un enfoque social y que tienen un impacto
              positivo en su entorno. Las empresas participantes deben estar
              comprometidas con el desarrollo sostenible y estar dispuestas a
              implementar prácticas responsables en su operación diaria. El
              programa busca recibir postulaciones de distintos tipos de
              empresas, de diversos sectores y tamaños. FUNDACIÓN ACTIVA A.C.
              valora la innovación, la creatividad y la capacidad de las
              empresas para resolver problemas y aprovechar oportunidades de
              crecimiento. Asimismo, se considerará positivamente a las empresas
              que muestren un compromiso con la inclusión, la diversidad y la
              igualdad de oportunidades. La finalidad del programa es otorgar el
              donativo a la empresa que presente la mejor propuesta para
              utilizar los fondos en su crecimiento y en la generación de
              empleos para personas desfavorecidas.
            </p>
            <h3>CONVERTIRSE EN PARTICIPANTE</h3>
            <p>
              Para convertirse en participante del programa, las empresas
              deberán cumplir con los requisitos establecidos y presentar la
              documentación correspondiente completa antes de la fecha límite
              establecida por FUNDACIÓN ACTIVA A.C. Además, los participantes
              deberán comprometerse a acudir a los eventos que sean organizados
              por FUNDACIÓN ACTIVA A.C. y a participar en videos promocionales
              del programa. La participación en estos eventos y videos es
              ilimitada durante el programa, hasta su conclusión y una vez
              concluida esta, sin establecer un límite de tiempo. FUNDACIÓN
              ACTIVA A.C. se reserva el derecho de usar la imagen e información
              de las empresas participantes para fines promocionales del
              programa, incluyendo la publicación de su nombre y logotipo en
              materiales publicitarios y en medios digitales y sociales. Es
              responsabilidad de los participantes asegurarse de que la
              información presentada en su solicitud sea verídica y completa.
              FUNDACIÓN ACTIVA A.C. se reserva el derecho de verificar la
              información proporcionada por los participantes y de solicitar
              información adicional si lo considera necesario. La falta de
              documentación completa o información falsa o engañosa puede
              resultar en la descalificación de la empresa participante. Usted
              acepta que FUNDACIÓN ACTIVA A.C. podrá utilizar toda la
              información, tanto la que es brindada por usted como la que no,
              para verificar su identidad y además, también acepta que podemos
              realizar cualquier investigación, ya sea de forma directa o a
              través de terceros, que consideremos necesaria relacionada con su
              identidad y capacidad legal, que incluye de manera enunciativa más
              no limitativa, la confirmación del dominio de su cuenta de correo
              electrónico o instrumentos financieros, entre otros medios de
              confirmación. Estas investigaciones o verificaciones pueden
              incluir el compartimiento de su información con terceros con el
              objetivo limitado de completar dichas investigaciones y
              verificaciones. Al aceptar participar en el programa, las empresas
              reconocen y aceptan las condiciones establecidas en estas
              cláusulas, así como cualquier cambio que pudiera ser necesario por
              parte de FUNDACIÓN ACTIVA A.C. para la correcta operación del
              programa.
            </p>
            <h3>PARTICIPANTES</h3>
            <p>
              Los aspirantes del programa se comprometen a notificar a FUNDACIÓN
              ACTIVA A.C. a la mayor brevedad el uso no autorizado de su nombre,
              o cualquier otro fallo en la seguridad. FUNDACIÓN ACTIVA A.C. no
              será responsable por los daños o pérdidas que se pudieran originar
              debido al no cumplimiento de esta obligación por su parte. El
              aspirante/participante es el único responsable de los datos que
              facilite en su petición de información y planteamiento, asimismo
              garantiza que la información proporcionada a FUNDACIÓN ACTIVA A.C.
              es veraz y actualizada y se hace responsable de comunicar
              cualquier modificación de los mismos y de mantener toda la
              información que haya facilitado actualizada de forma que responda
              en cada momento a su situación real. FUNDACIÓN ACTIVA A.C. se
              compromete a respetar la confidencialidad de los datos e
              información proporcionados por las empresas participantes en el
              programa. Todos los datos serán tratados de manera confidencial y
              solo serán utilizados con el propósito de evaluar su solicitud de
              participación en el programa. FUNDACIÓN ACTIVA A.C. no podrá
              divulgar, compartir o utilizar los datos e información
              proporcionados por las empresas participantes con terceros, salvo
              en los casos en que sea necesario para cumplir con sus
              obligaciones legales o para proteger sus intereses y objetivos del
              programa. Las empresas participantes aceptan que FUNDACIÓN ACTIVA
              A.C. pueda compartir su información y datos con el jurado del
              programa, los patrocinadores y los colaboradores del programa,
              únicamente con el propósito de evaluar su solicitud de
              participación y seleccionar al ganador del programa.
            </p>
            <h3>APLICACIÓN</h3>
            <p>
              Fecha de aplicación máxima: La fecha límite de aplicación para el
              programa es [insertar fecha]. No se aceptará documentación
              posterior a esta fecha. La documentación incompleta será
              descartada y los solicitantes no serán considerados para el
              programa. FUNDACIÓN ACTIVA A.C. se compromete a proporcionar un
              proceso de selección justo e imparcial para todos los
              participantes, sin discriminación de ningún tipo. Los
              participantes aceptan cumplir con todas las reglas y requisitos
              establecidos en el contrato y en los documentos del programa.
              FUNDACIÓN ACTIVA A.C. se reserva el derecho de rechazar cualquier
              solicitud de participación que no cumpla con los requisitos
              establecidos o que contenga información falsa o engañosa. La
              decisión será definitiva y no podrá ser impugnada. Las empresas
              que no resulten ganadoras, podrán aplicar nuevamente en futuros
              programas organizados por FUNDACIÓN ACTIVA, A.C.
            </p>
            <h3>USO DE LA IMAGEN E INFORMACIÓN DEL NEGOCIO</h3>
            <p>
              Al participar en este programa, se otorga a favor de FUNDACIÓN
              ACTIVA A.C. de forma expresa e ilimitada, el uso total de la
              imagen e información de los negocios para fines promocionales y
              publicitarios, velando siempre por la seguridad e integridad de
              estos.
            </p>
            <h3>SELECCIÓN DEL PROYECTO GANADOR</h3>
            <p>
              FUNDACIÓN ACTIVA A.C. seleccionará al ganador del programa
              utilizando un proceso de evaluación justo e imparcial. El jurado
              calificará cada proyecto en función de los criterios de evaluación
              previamente establecidos. Los criterios de evaluación pueden
              incluir, pero no estar limitados, a: innovación, sostenibilidad,
              viabilidad, impacto social y/o ambiental, entre otros. Cada
              proyecto será calificado en los distintos rubros a evaluar en una
              escala del 1 al 10. La suma total de las puntuaciones obtenidas
              determinará el ganador del programa. En caso de empate, el jurado
              tendrá la última palabra para determinar al ganador. El ganador
              del programa será notificado en un evento a realizar por FUNDACIÓN
              ACTIVA, A.C. en el que asistirán más invitados, el ganador será
              mencionado públicamente en dicho evento. Además, el nombre del
              ganador será anunciado públicamente en la página web y en las
              redes sociales de la Fundación Activa A.C. La decisión del jurado
              será definitiva y no podrá ser impugnada. Los participantes
              aceptan cumplir con esta cláusula y renuncian a cualquier acción
              legal o reclamo contra la Fundación Activa A.C. en relación con la
              elección del ganador del programa. Asimismo, previo a la
              realización de la donación por parte de FUNDACIÓN ACTIVA, A.C. a
              favor de la empresa ganadora, esta deberá de firmar un contrato en
              el que se establezcan la recepción del donativo, así como demás
              cuestiones relacionadas.
            </p>
            <h3>LIMITACIÓN DE RESPONSABILIDAD</h3>
            <p>
              FUNDACIÓN ACTIVA A.C. no se hace responsable del mal uso que el
              beneficiario haga del programa, en específico, con los fondos
              otorgados. FUNDACIÓN ACTIVA A.C. otorga los fondos con el único
              propósito de contribuir al crecimiento del negocio y la generación
              de empleo para personas desfavorecidas, tal como se ha establecido
              en los términos y condiciones del programa. El beneficiario del
              programa, en específico el proyecto ganador, asume la
              responsabilidad total y exclusiva de la gestión, administración y
              empleo adecuado de los fondos otorgados por FUNDACIÓN ACTIVA A.C.
              El beneficiario del programa, en específico el proyecto ganador,
              se compromete a utilizar los fondos exclusivamente para los fines
              establecidos en el programa, y a cumplir con las leyes,
              regulaciones y requisitos aplicables en la gestión y uso de los
              fondos otorgados. El beneficiario ganador, renuncia a cualquier
              acción legal o reclamo contra FUNDACIÓN ACTIVA A.C. en relación
              con el uso de los fondos otorgados.
            </p>
            <h3>DEMÁS CUESTIONES</h3>
            <p>
              FUNDACIÓN ACTIVA A.C. no será responsable por información falsa o
              incompleta proporcionada por los participantes en su solicitud de
              participación en el programa. Los participantes del programa
              asumen la responsabilidad exclusiva y total de la veracidad y
              precisión de la información proporcionada a FUNDACIÓN ACTIVA A.C.
              durante el proceso de solicitud. FUNDACIÓN ACTIVA A.C. se reserva
              el derecho de verificar y evaluar la información proporcionada por
              los participantes en su solicitud de participación, y tomará las
              medidas necesarias para proteger sus intereses y objetivos. En
              caso de que se descubra que la información proporcionada es falsa
              o incompleta, FUNDACIÓN ACTIVA A.C. se reserva el derecho de
              descalificar al participante del programa. Los participantes del
              programa renuncian a cualquier acción legal o reclamo contra la
              FUNDACIÓN ACTIVA A.C. en relación con la información proporcionada
              en su solicitud de participación. FUNDACIÓN ACTIVA A.C. se
              deslinda de cualquier responsabilidad por los daños o perjuicios
              que pudieran derivar del uso de información falsa o incompleta
              proporcionada por los participantes del programa. La falta de
              acción de parte de FUNDACIÓN ACTIVA A.C. con respecto a una
              transgresión por parte suya o de otros, no constituye renuncia a
              nuestro derecho a actuar con respecto a violaciones o
              transgresiones posteriores o similares. Estas Condiciones no deben
              interpretarse como una renuncia a derechos que, en virtud de las
              leyes o regulaciones de protección al consumidor aplicable, son
              irrenunciables. Estas Condiciones, y cualquier derecho, obligación
              y licencia concedida en virtud del presente acuerdo, no podrá ser
              transferido o cedido por usted, pero podrá ser cedido por nosotros
              sin aviso ni restricción, incluyendo sin limitación a nuestras
              empresas filiales, matrices o subsidiarias, o a cualquier persona.
              Todo intento de transferencia o cesión en violación del presente
              acuerdo será nulo y quedará sin efecto. Las disposiciones que se
              relacionen con la suspensión, terminación, cancelación, deudas,
              uso general de la plataforma, honorarios, disputas, su
              responsabilidad, indemnización y en disposiciones generales
              seguirán vigentes luego de la cancelación de estas Condiciones.
              Todas las disposiciones de los presentes Términos y condiciones,
              que por su naturaleza están destinadas a seguir vigentes después
              de la expiración o terminación del presente Acuerdo, incluyendo,
              pero no limitado a las obligaciones con respecto a la negación de
              garantías, limitaciones de responsabilidad, indemnización, y los
              derechos de propiedad intelectual, seguirán en vigor tras la
              expiración o terminación del mismo. Al participar en este
              programa, aceptas estos términos y condiciones. FUNDACIÓN ACTIVA
              A.C. se reserva el derecho de modificar los términos y condiciones
              en cualquier momento sin previo aviso. Si tienes alguna pregunta o
              inquietud, contáctanos a través de [insertar contacto].
            </p>
          </div>
        </Modal>
      )}

      {showModal2 && (
        <Modal onClose={() => setShowModal2(false)}>
          <div className="modal__content">
            <h2>AVISO DE PRIVACIDAD</h2>

            <p>
              FUNDACIÓN ACTIVA, A.C. no recopila información personal de los
              usuarios, excepto cuando estos llevan a cabo la aplicación a las
              convocatorias a programas de apoyo a las empresas; la recepción de
              nuestros servicios; y/o cuando, realicen la solicitud de
              información vía telefónica, electrónica, o bien, a través de
              cualquier otro método aplicable. La confidencialidad y efectiva
              protección de la información de nuestros usuarios es de carácter
              prioritario para nosotros; por estas razones, FUNDACIÓN ACTIVA,
              A.C. se compromete a llevar a cabo una protección adecuada de los
              mismos; esto, con fundamento y de conformidad, con los principios,
              derechos y obligaciones establecidos en la Ley Federal de
              Protección de Datos Personales en Posesión de Particulares
              (LFPDPPP) y demás normativas aplicables, a efecto de asegurar la
              seguridad, integridad y privacidad de la información de los
              usuarios. Por lo antecedente, y en cumplimiento al marco legal
              aplicable, ponemos a su disposición la siguiente información:
            </p>

            <h3>I.- Responsable del tratamiento de sus datos personales.</h3>

            <p>
              Para efectos del presente Aviso de Privacidad, FUNDACIÓN ACTIVA,
              A.C. es el responsable de la protección y tratamiento de sus datos
              personales, así como la entidad encargada de recabar dichos datos,
              al que podrá contactar a través de su correo electrónico
              administrador@activa.org.mx, con domicilio ubicado en Av. Loma de
              la Palma 200-1, Colonia Lomas de Vista Hermosa, Alcaldia
              Cuajimalpa de Morelos, Ciudad de México C.P 05100.
            </p>

            <h3>
              II.- Finalidades primarias del tratamiento de sus datos
              personales.
            </h3>

            <p>
              Los datos personales del usuario, que en su caso sean recabados, y
              salvo que éste, disponga lo contrario a través del medio descrito
              en el presente Aviso de Privacidad, serán tratados y protegidos
              bajo estricta confidencialidad por FUNDACIÓN ACTIVA, A.C. y serán
              utilizados para los siguientes efectos: - Análisis de aplicaciones
              a programas especiales; - Análisis y toma de decisiones respecto
              de donaciones que se pudieran llegar a aportar a las empresas
              suscritas a programas especiales; - Fines publicitarios; - Envió
              de noticias; - Comprobación de pagos; - Invitaciones a eventos; -
              Registro de usuarios.
            </p>

            <h3>
              III.- Finalidades secundarias del tratamiento de sus datos
              personales.
            </h3>

            <p>
              En caso de no existir oposición de su parte, FUNDACIÓN ACTIVA,
              A.C. dará tratamiento a sus datos personales para finalidades
              secundarias, tales como: - Envió de mercancía; - Envío de
              promociones.
            </p>

            <h3>IV.- Datos personales.</h3>

            <p>
              A continuación, se enumeran en forma enunciativa más no
              limitativa, los datos personales que FUNDACIÓN ACTIVA, A.C.
              recabará con la finalidad del cumplimiento y entrega de los
              servicios contratados. . Datos de identificación: Nombre completo,
              domicilio, teléfono de casa, celular y/o laboral, correo
              electrónico, firma, firma electrónica, clave del Registro Federal
              de Contribuyentes (RFC), Clave Única de Registro de Población
              (CURP), lugar y fecha de nacimiento, edad, personas de referencia.
              . Datos patrimoniales: Razón o denominación social, giro y/o
              actividad económica, clave de Registro Federal de Contribuyentes
              (RFC) para personas morales, información de cuentas bancarias,
              datos de representantes legales de la persona moral (nombre,
              correo electrónico, Registro Federal del Contribuyente (RFC),
              Clave Única de Registro de Población (CURP), firma, firma
              electrónica); estados financieros; estados de cuenta bancarios.
            </p>

            <h3>V.- Transferencia de datos.</h3>

            <p>
              FUNDACIÓN ACTIVA, A.C., podrá transferir sus datos personales a
              terceros mexicanos o extranjeros que le provean de los servicios
              necesarios para la realización de la prestación de los servicios
              que contrate con nosotros, así como a sus sociedades controladas,
              subsidiarias, filiales o cualquier otra sociedad del mismo grupo
              responsable para tal fin. En dicho supuesto, FUNDACIÓN ACTIVA,
              A.C. adoptará las medidas necesarias para que las personas que
              tengan acceso a sus datos personales, cumplan con lo dispuesto en
              el presente Aviso de Privacidad, así como en el marco legal
              aplicable. FUNDACIÓN ACTIVA, A.C., se compromete a velar porque se
              cumplan todos los principios enmarcados en los lineamientos sobre
              la protección y en torno a la transmisión de sus datos personales.
            </p>

            <h3>VI.- Protección de datos.</h3>

            <p>
              La seguridad de su información es nuestra prioridad, es por ello
              que la protegemos mediante el uso y mantenimiento de altas medidas
              de seguridad técnicas, físicas y administrativas, a fin de impedir
              que terceros no autorizados, accedan a la misma. Por lo tanto, sus
              datos, en cumplimiento con lo establecido en el marco legal para
              la Protección de Datos Personales en Posesión de Particulares, son
              protegidos y resguardados siguiendo los lineamientos, políticas y
              programas de privacidad, utilizando la tecnología más avanzada
              existente en el mercado para la protección de dicha información
              proporcionada por el titular, tras la contratación de los
              servicios que FUNDACIÓN ACTIVA, A.C. ofrece.
            </p>

            <h3>VII.- Ejercicio de derechos ARCO.</h3>

            <p>
              Usted como usuario, tiene derecho a conocer qué datos personales
              suyos tenemos en nuestra posesión, que uso se le dan a los mismos
              y las condiciones de uso que le damos a los mismos. Asimismo, el
              usuario tiene derecho a solicitar la corrección de su información
              personal en caso de que esta se encuentre desactualizada, sea
              inexacta o incompleta; que esta sea eliminada de nuestros
              registros o base de datos cuando considere que la misma no está
              siendo utilizada conforme a los principios, deberes y obligaciones
              previstas en la normativa; así como oponerse al uso de sus datos
              personales, para ciertos fines específicos. Los mecanismos que se
              han implementado para el ejercicio de sus derechos ARCO (derechos
              de acceso, ratificación, cancelación y oposición), deberán de ser
              enviados por escrito al correo electrónico katalyst@activa.org.mx
              FUNDACIÓN ACTIVA, A.C. se comunicará con usted en un plazo máximo
              de 15 días hábiles, contados a partir desde la fecha en que se
              recibe la solicitud de acceso, rectificación, cancelación u
              oposición, para informarle sobre la determinación adoptada y en
              caso de ser precedente, se haga efectiva dentro de los quince días
              hábiles siguientes a la fecha en que se comunique la respuesta y
              resolución en cuestión.
            </p>

            <h3>
              VIII.- Revocación del consentimiento para el tratamiento de sus
              datos personales.
            </h3>

            <p>
              En todo momento, nuestros usuarios podrán revocar el
              consentimiento que nos han otorgado para el tratamiento de sus
              datos personales, a fin de que dejemos de hacer uso de los mismos.
              Para ello es necesario que presente su petición por escrito vía
              correo electrónico a la dirección katalyst@activa.org.mx Sin
              embargo, es importante que tenga en cuenta que no en todos los
              casos podremos atender su solicitud o concluir el uso de forma
              inmediata, ya que es posible que por alguna obligación legal
              requiramos seguir tratando sus datos personales.
            </p>

            <h3>IX.- Cambios al Aviso de Privacidad.</h3>

            <p>
              FUNDACIÓN ACTIVA, A.C. podrá modificar el presente Aviso de
              Privacidad y sus prácticas en torno al manejo de su información
              personal; sin embargo, cualquier modificación sustancial que pueda
              afectar a nuestros usuarios, se les será notificada mediante una
              publicación en nuestros portales y tras el envío de correos
              electrónicos, o a través de los medios de comunicación
              proporcionados.
            </p>

            <h3>X.- Tratamiento indebido de sus datos personales.</h3>

            <p>
              Si el usuario considera que su derecho de protección de datos
              personales, ha sido lesionado con alguna conducta por parte de
              FUNDACIÓN ACTIVA, A.C. o por medio de sus actuaciones o
              respuestas, presume que en el tratamiento de sus datos personales
              existe alguna violación a las disposiciones previstas en la Ley
              Federal de Protección de Datos Personales en Posesión de
              Particulares (LFPDPPP), y posterior a su petición, FUNDACIÓN
              ACTIVA, A.C. no ha proporcionado respuesta a dicha lesión, podrá
              interponer la queja o denuncia correspondiente ante el Instituto
              Nacional de Transparencia, Acceso a la Información y Protección de
              Datos Personas.
            </p>

            <h3>XI.- Fecha de última actualización.</h3>
            <p>27 de febrero del 2023.</p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Section4;
