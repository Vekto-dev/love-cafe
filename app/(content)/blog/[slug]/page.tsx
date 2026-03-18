import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, MessageCircle } from "lucide-react";
import { BLOG_POSTS, getBlogPost } from "@/lib/data/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";

const BASE = "https://coolraulhostel.com";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: post.ogImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ─── Article content components ──────────────────────────────────────── */

function HostelChoiceContent() {
  return (
    <div className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-muted max-w-none">
      <p>
        Rosario tiene varios hostels. Algunos son básicos: una cama, un baño compartido y poco más. Otros se convirtieron en parte de la experiencia misma de la ciudad. Saber qué mirar antes de reservar te puede ahorrar dolores de cabeza y asegurarte que dormís tranquilo sin perderte la onda social.
      </p>

      <h2>Ubicación: el factor más importante</h2>
      <p>
        En Rosario, el microcentro es la zona ideal para quedarse. Estás cerca de la costanera, a pocas cuadras de los bares de Pichincha, el Monumento a la Bandera y la terminal de ómnibus. Si elegís un hostel lejos del centro, vas a gastar más tiempo y plata en transporte.
      </p>
      <p>
        La zona de San Lorenzo y Córdoba (la arteria principal del microcentro) tiene buena oferta y está bien conectada. Evitá los barrios muy alejados del centro a menos que tengas auto propio o te guste caminar mucho.
      </p>

      <h2>Qué tipo de habitación necesitás</h2>
      <p>
        Esta es la decisión que más impacta en el precio y en la experiencia:
      </p>
      <ul>
        <li>
          <strong>Dormitorio mixto</strong>: el más económico. Convivís con otros viajeros de distintos lugares. Ideal para conocer gente y salir con quienes están de paso. El ruido puede ser un factor si sos de dormir liviano.
        </li>
        <li>
          <strong>Dormitorio femenino</strong>: mismas ventajas que el mixto pero solo con otras mujeres. Muchas viajeras lo prefieren por comodidad y privacidad sin el costo de una habitación privada.
        </li>
        <li>
          <strong>Habitación privada</strong>: para parejas o viajeros que necesitan descansar bien. Más cara, pero tenés tu espacio. Aún así, en los buenos hostels compartís las áreas comunes y podés socializar cuando querés.
        </li>
      </ul>

      <h2>Servicios que hacen la diferencia</h2>
      <p>
        No todos los hostels ofrecen lo mismo. Estos son los que importan de verdad:
      </p>
      <ul>
        <li>
          <strong>WiFi</strong>: fundamental. Verificá que funcione bien antes de reservar, sobre todo si trabajás en remoto. Los hostels de buena reputación suelen tener buena velocidad.
        </li>
        <li>
          <strong>Cocina compartida</strong>: si te cocinás aunque sea el desayuno y alguna cena, ahorrás significativamente en presupuesto de comida.
        </li>
        <li>
          <strong>Desayuno incluido</strong>: no todos lo ofrecen. Cuando está incluido, arrancás el día sin gastar un peso y sin tener que salir de inmediato a buscar lugar para comer.
        </li>
        <li>
          <strong>Lockers</strong>: imprescindible para guardar objetos de valor. Los mejores hostels tienen lockers individuales en cada dormitorio. Recomendamos traer tu propio candado.
        </li>
        <li>
          <strong>Recepción 24hs</strong>: importante si llegás tarde de noche o salís muy temprano. Verificá los horarios de check-in y check-out antes de llegar.
        </li>
      </ul>

      <h2>La cultura del hostel importa</h2>
      <p>
        Hay hostels donde el silencio reina después de las 10pm y hay otros donde el bar funciona hasta las 3am y hay música en vivo los jueves. Ninguno es mejor que el otro: depende de lo que buscás.
      </p>
      <p>
        Si viajás solo y querés conocer gente, elegí un hostel con vida social activa: eventos, área común, bar propio. En Cool Raúl, por ejemplo, tenemos estudio de grabación, sala de ensayo, bar y noches de karaoke. No es solo donde dormís, es parte del viaje. Pero si venís a descansar tranquilo, quizás preferís algo más silencioso.
      </p>

      <h2>Las reseñas no mienten (casi)</h2>
      <p>
        Hostelworld y Google son las fuentes más confiables para reseñas de hostels. Ponele atención especial a los comentarios <strong>recientes</strong> (los de hace más de un año pueden no reflejar el estado actual del lugar). Mirá si la gestión responde las críticas negativas: eso dice mucho del equipo.
      </p>
      <p>
        Los puntajes altos en limpieza, atmósfera y ubicación son los indicadores más importantes para hostels. El puntaje de "valor" también, pero es más subjetivo.
      </p>

      <h2>El veredicto</h2>
      <p>
        Si buscás un hostel en el centro de Rosario con buena onda, desayuno incluido, lockers, WiFi y la posibilidad de usar un estudio de grabación o sala de ensayo, <Link href="/#habitaciones">Cool Raúl tiene 9.1/10 en Hostelworld y más de 308 reseñas en Google</Link>. Reservás directo por WhatsApp, sin comisiones de OTAs.
      </p>
    </div>
  );
}

function MochilerosContent() {
  return (
    <div className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-muted max-w-none">
      <p>
        Argentina tiene fama de cara después de los cambios económicos recientes, pero Rosario sigue siendo accesible para mochileros si sabés cómo moverte. Acá te dejamos un desglose honesto de cuánto cuesta viajar por la ciudad.
      </p>

      <h2>¿Cuánto cuesta por día en Rosario?</h2>
      <p>
        La estimación cambia mucho según el tipo de cambio del momento, así que damos rangos en dólares usando el tipo de cambio paralelo:
      </p>
      <ul>
        <li>
          <strong>Presupuesto bajo</strong> (cama en hostel + cocinarte en la cocina comunitaria): ~USD 20-25 por día
        </li>
        <li>
          <strong>Presupuesto medio</strong> (cama en hostel + salir a comer una vez, algún bar a la noche): ~USD 35-50 por día
        </li>
        <li>
          <strong>Presupuesto holgado</strong> (habitación privada, restaurantes, actividades pagas): ~USD 60-80 por día
        </li>
      </ul>
      <p>
        Estos números cambian con la economía argentina. Verificá el tipo de cambio antes de llegar y llevá dólares o reales en efectivo para cambiar localmente si el tipo de cambio oficial no te conviene.
      </p>

      <h2>Dónde dormir barato</h2>
      <p>
        Los hostels en el microcentro son la mejor relación precio-experiencia. Precios orientativos en dormitorios: USD 6-10 por noche. Habitaciones privadas: USD 20-35 por noche.
      </p>
      <p>
        Elegí un hostel con <strong>desayuno incluido y cocina comunitaria</strong>. Eso te reduce significativamente el gasto en comida.
      </p>

      <h2>Dónde comer barato</h2>
      <p>
        Rosario tiene buenas opciones para comer sin gastar demasiado:
      </p>
      <ul>
        <li>
          <strong>Mediodía en el centro</strong>: menús del día en los bares y restaurantes del microcentro. Por USD 4-6 comés plato principal y bebida.
        </li>
        <li>
          <strong>Rotiserías y empanadas</strong>: las rotiserías de barrio tienen precios muy accesibles. Una docena de empanadas alcanza para almorzar bien.
        </li>
        <li>
          <strong>Desayuno de bar</strong>: medialunas y café con leche. Por menos de USD 2 arrancás el día en cualquier bar del centro.
        </li>
        <li>
          <strong>Cocina comunitaria del hostel</strong>: una pasta, un arroz o unos huevos. Es la diferencia entre gastar USD 5 o USD 0 en una comida.
        </li>
      </ul>

      <h2>Transporte económico</h2>
      <p>
        Rosario tiene uno de los mejores sistemas de transporte público de Argentina:
      </p>
      <ul>
        <li>
          <strong>Colectivos con SUBE</strong>: menos de USD 0.50 por viaje. La tarjeta SUBE funciona en todo el país y la cargás en kioscos.
        </li>
        <li>
          <strong>Mi Bici Tu Bici</strong>: sistema de bicicletas públicas, prácticamente gratuito para viajes cortos. Ideal para la costanera y el microcentro.
        </li>
        <li>
          <strong>A pie</strong>: el microcentro es muy caminable. Si te quedás en el centro, vas a necesitar muy poco transporte.
        </li>
      </ul>

      <h2>Actividades sin gastar nada</h2>
      <p>
        Rosario tiene mucho para ofrecer sin abrir la billetera:
      </p>
      <ul>
        <li>La Costanera del Paraná (kilómetros de paseo ribereño)</li>
        <li>Monumento Nacional a la Bandera (entrada libre)</li>
        <li>Parque Independencia y sus jardines</li>
        <li>Barrio Pichincha de día (murales, arquitectura, ambiente)</li>
        <li>Plaza 25 de Mayo y el centro histórico</li>
        <li>Playas de las islas (solo pagás la lancha)</li>
        <li>El Pasaje Juramento y sus anticuarios</li>
      </ul>

      <h2>Tip final</h2>
      <p>
        Si podés, reservá tu hostel directamente por WhatsApp o por su sitio web. Ahorrás las comisiones de Booking o Hostelworld y a veces conseguís mejor precio o algún extra. En <Link href="/">Cool Raúl</Link> el desayuno está incluido, tenés cocina comunitaria y el WiFi funciona bien. Todo eso reduce tu gasto diario considerablemente.
      </p>
    </div>
  );
}

function NocheContent() {
  return (
    <div className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-muted max-w-none">
      <p>
        Rosario tiene una noche muy particular. No es como Buenos Aires — no se queda despierta hasta las 8am — pero tampoco se duerme temprano. La movida empieza tarde, como en toda Argentina, y tiene un sabor propio: más bohemia, más musical, menos careta.
      </p>

      <h2>Barrio Pichincha: el epicentro de todo</h2>
      <p>
        Pichincha es <em>el</em> barrio nocturno de Rosario. Tiene historia: era el distrito del cabaret y de los conventillos a principios del siglo XX. Hoy es un barrio de casas bajas, murales en cada pared y bares en cada esquina.
      </p>
      <p>
        La movida empieza alrededor de las 22hs y se extiende hasta la madrugada. Hay opciones para todos: bares de cerveza artesanal, boliches de cumbia, milongas de tango, bares de rock y techno en los sótanos. Lo mejor de Pichincha es que todo está concentrado en pocas cuadras, así que podés recorrer varios lugares en una noche.
      </p>

      <h2>El centro y sus bares</h2>
      <p>
        Si no querés trasladarte hasta Pichincha, el microcentro también tiene opciones. La zona de las calles San Lorenzo, Córdoba y España tiene varios bares de mediana escala con música en vivo o DJ los fines de semana. Son lugares más tranquilos que Pichincha y más accesibles para una primera noche.
      </p>

      <h2>Música en vivo: la escena rosarina</h2>
      <p>
        Rosario es la ciudad del rock nacional. De acá salieron Los Redondos, La Bersuit Vergarabat, Fito Páez y decenas de bandas que moldearon la música argentina. Esa historia vive en los bares y salas de shows de la ciudad.
      </p>
      <p>
        Antes de llegar, buscá la agenda de La Quimera, El Loft, Plataforma Lavardén y el Complejo Provincial. Espacios culturales estatales y privados que tienen shows casi todos los fines de semana. Hay bandas emergentes muy buenas y a veces actuaciones de artistas nacionales.
      </p>

      <h2>El karaoke: más en serio de lo que parece</h2>
      <p>
        Sí, el karaoke. En Rosario es un plan genuinamente popular, no una rareza de turistas. Los bares de karaoke tienen noches específicas con listas largas y gente que se toma el asunto muy en serio.
      </p>
      <p>
        En Cool Raúl organizamos noches de karaoke que suelen terminar en sesiones épicas. Si llegás en el momento correcto, podés sumarte a una. Preguntá en recepción qué está pasando esa semana.
      </p>

      <h2>Consejos para la noche rosarina</h2>
      <ul>
        <li>
          <strong>La gente sale tarde</strong>: no te sorprendas si llegás a un bar a las 22hs y está prácticamente vacío. Volvé a las 24hs y va a estar lleno.
        </li>
        <li>
          <strong>Llevá efectivo</strong>: los bares más pequeños y los boliches no siempre tienen terminal de tarjeta. Sacá plata del cajero antes de salir.
        </li>
        <li>
          <strong>Los remises son tu amigo</strong>: para volver a altas horas de la madrugada, los remises son más seguros y económicos que los taxis. Guardá el número de alguna radio o usá Cabify.
        </li>
        <li>
          <strong>Jueves, viernes y sábado</strong>: los mejores días para salir. El miércoles también tiene movida, especialmente en los bares del centro.
        </li>
        <li>
          <strong>Preguntá en el hostel</strong>: los recepcionistas saben qué está pasando esa noche específica. Una recomendación personalizada vale más que cualquier guía de internet.
        </li>
      </ul>

      <h2>Para los que no quieren trasnochar</h2>
      <p>
        Si preferís una noche tranquila, la costanera de noche también tiene lo suyo. Los bares y restaurantes sobre el río están bien hasta las 23hs y la vista al Paraná de noche es hermosa. Los bares del Monumento a la Bandera son un buen lugar para tomar algo mirando el río.
      </p>

      <p>
        ¿Querés explorar la noche rosarina sin perderte? <Link href="/">Hospedarte en Cool Raúl</Link> te pone en el centro de todo: a 30 minutos a pie de Pichincha y con toda la info local que necesitás.
      </p>
    </div>
  );
}

function RosarioInviernoContent() {
  return (
    <div className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-muted max-w-none">
      <p>
        Todo el mundo dice que Rosario se disfruta en verano. Las islas, la Costanera, el calor. Y sí, el verano tiene lo suyo. Pero hay un secreto que los rosarinos cuidan bien: el invierno es mejor.
      </p>

      <h2>El mito del verano</h2>
      <p>
        En enero Rosario está semivacía. Los rosarinos se van de vacaciones, los negocios cierran antes, los bares del centro tienen menos vida. El calor aprieta — 35, 40 grados en las peores semanas — y hay que moverse solo de noche. Es una ciudad diferente, más quieta de lo que la gente espera.
      </p>
      <p>
        El verano tiene sus momentos: las islas del Paraná, las playas naturales del delta, la Costanera al amanecer antes del calor. Pero si querés conocer Rosario de verdad, el verano no es la mejor temporada.
      </p>

      <h2>El clima en invierno: lo que nadie te dice</h2>
      <p>
        El invierno rosarino no es el invierno patagónico. Las temperaturas van de 8 a 15°C la mayor parte de junio, julio y agosto. Hace frío, sí, pero un frío caminable. No llueve tanto como en Buenos Aires. Los días son cortos pero soleados, y salir a recorrer el centro con un buen abrigo es perfectamente cómodo.
      </p>
      <p>
        No hay mosquitos, no hay humedad aplastante. El mate caliente cobra otro sentido. Y podés caminar la ciudad sin sudar.
      </p>

      <h2>La ciudad sin turistas</h2>
      <p>
        En invierno, Rosario es la ciudad de los rosarinos. Los bares de Pichincha tienen mesa disponible. El Mercado del Patio tiene lugar al mediodía. El Monumento a la Bandera se puede fotografiar sin selfie-sticks en el encuadre. Las pizzerías del centro te atienden sin espera.
      </p>
      <p>
        Es la ciudad auténtica, sin la capa de turismo que a veces aplana la experiencia. Los lugareños son más accesibles, los mozos más relajados, la onda más genuina.
      </p>

      <h2>Qué hacer en invierno en Rosario</h2>
      <ul>
        <li>
          <strong>Teatro El Círculo</strong>: la temporada de ópera y música clásica arranca en invierno. El teatro es uno de los más bellos de Argentina, con una acústica impresionante. Conseguir entradas en julio es incomparablemente más fácil que en primavera.
        </li>
        <li>
          <strong>Museos</strong>: el Museo Provincial de Bellas Artes, el MACRO, el Museo de la Memoria. En verano están llenos o cerrados por el calor; en invierno los tenés casi para vos.
        </li>
        <li>
          <strong>Recitales y shows en vivo</strong>: la escena musical de Rosario no para en invierno. Los bares de Pichincha y los espacios culturales tienen agenda intensa los fines de semana.
        </li>
        <li>
          <strong>Asado de domingo en el Parque Independencia</strong>: sí, los rosarinos hacen asado en el parque en invierno con el sol pegando. Llevá mate y sumate.
        </li>
        <li>
          <strong>Heladerías igualmente llenas</strong>: esto es un dato real. El rosarino come helado en invierno. No te sorprendas si hay cola en julio.
        </li>
      </ul>

      <h2>Gastronomía de invierno</h2>
      <p>
        Los bodegones del centro sacan sus platos de invierno: locro, puchero, guiso de lentejas. Es la otra cara gastronómica de Rosario, menos instagram-friendly pero más honesta. Los precios son bajos y las porciones generosas.
      </p>
      <p>
        La pizza "a la piedra" también cambia de sentido en invierno: caliente, recién salida del horno, con un vaso de vino tinto. Es otro ritual.
      </p>

      <h2>El precio: la razón más honesta</h2>
      <p>
        En temporada baja todo es más barato. El alojamiento puede costar entre un 20 y un 40% menos que en temporada alta. Los restaurantes tienen menús del día más accesibles. Los tours y actividades tienen descuentos.
      </p>
      <p>
        Si viajás con presupuesto ajustado, el invierno es cuando Rosario es más accesible. Y si trabajás en remoto, es cuando el hostel está más tranquilo y podés quedarte semanas sin problemas.
      </p>

      <h2>Dónde quedarse</h2>
      <p>
        <Link href="/">Cool Raúl Rock&apos;n Hostel</Link> en invierno es una experiencia diferente. Más íntimo, menos gente, más espacio en las áreas comunes. El estudio de grabación tiene más disponibilidad. La terraza con parrilla la tenés casi para vos. Y el precio por noche es el más bajo del año.
      </p>
      <p>
        Si estás pensando en visitar Rosario y tenés flexibilidad de fechas, considerá julio o agosto. Te va a sorprender.
      </p>
    </div>
  );
}

function RosarioNomadeContent() {
  return (
    <div className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-muted max-w-none">
      <p>
        Rosario no aparece en las listas de "mejores destinos para nómades digitales". Eso es exactamente por qué está buena. Sin el hype de Buenos Aires, sin los precios de Mendoza, sin la infraestructura turística que a veces se come la autenticidad de los lugares.
      </p>

      <h2>Por qué Rosario y no Buenos Aires</h2>
      <p>
        La respuesta más corta: es entre un 30 y un 50% más barato vivir en Rosario que en Buenos Aires. El alquiler, la comida, los bares, el transporte. Todo más accesible.
      </p>
      <p>
        Y la ciudad tiene todo lo que necesitás: universidad grande, buena escena gastronómica, transporte público decente, atención médica de calidad, comunidad cultural activa. No estás sacrificando calidad de vida. Estás pagando menos por ella.
      </p>

      <h2>Conectividad: la pregunta que siempre hacen</h2>
      <p>
        El internet en Rosario funciona bien. La fibra óptica llega a la mayoría del centro y los barrios residenciales. Los hostels y cafés del microcentro tienen WiFi estable para videoconferencias y trabajo normal. Si necesitás conexión de respaldo, las SIM de Personal, Claro o Movistar con datos 4G son baratas y funcionan en toda la ciudad.
      </p>
      <p>
        No hay coworkings especializados al nivel de Buenos Aires, pero tampoco hacen falta para la mayoría de los trabajos remotos. Un hostel con buena conexión y mesas cómodas alcanza perfectamente.
      </p>

      <h2>Costo de vida real</h2>
      <p>
        Estimaciones para quien cobra en dólares o euros (usando tipo de cambio paralelo vigente):
      </p>
      <ul>
        <li><strong>Alojamiento en hostel (dorm)</strong>: USD 8-12 por noche, USD 150-250 por mes</li>
        <li><strong>Habitación privada en hostel</strong>: USD 25-35 por noche</li>
        <li><strong>Comida por día</strong>: USD 10-20 cocinándote parcialmente, USD 20-40 comiendo afuera</li>
        <li><strong>Transporte</strong>: casi nada — el microcentro es caminable y los colectivos cuestan centavos en dólares</li>
        <li><strong>Ocio</strong>: bares, recitales, museos — USD 5-15 por salida</li>
      </ul>
      <p>
        Una vida cómoda en Rosario, para alguien que cobra en divisas, cuesta entre USD 600 y USD 1.000 por mes. Menos que el alquiler de un cuarto en muchas ciudades europeas.
      </p>

      <h2>Los mejores barrios para vivir</h2>
      <ul>
        <li>
          <strong>Microcentro</strong>: el más práctico. Todo a pie, cafés para trabajar, supermercados en la esquina. Ideal para estadías cortas o si llegás por primera vez.
        </li>
        <li>
          <strong>Barrio Pichincha</strong>: más bohemio. Casas bajas, murales, bares a la vuelta. La gente que se queda más tiempo suele terminar acá. Más tranquilo que el centro pero con mucha vida de barrio.
        </li>
        <li>
          <strong>Zona universitaria (República de la Sexta)</strong>: más joven. Cafeterías, librerías de usados, gente estudiando. Si querés conectar con la comunidad local, esta zona tiene mucho movimiento de veintipico.
        </li>
      </ul>

      <h2>Comunidad y networking</h2>
      <p>
        Rosario tiene una comunidad tech silenciosa pero real. Hay meetups de desarrollo, grupos de emprendedores, eventos de la Universidad Nacional. No es el ecosistema de Buenos Aires, pero eso también significa menos competencia y más acceso a la gente.
      </p>
      <p>
        En el hostel conocés viajeros y trabajadores remotos de todo el mundo que pasaron por la misma etapa de "me quedé más de lo que pensaba". Esa comunidad informal muchas veces vale más que cualquier coworking.
      </p>

      <h2>El hostel como base de operaciones</h2>
      <p>
        Si llegás a Rosario sin saber cuánto tiempo vas a quedarte, un hostel tiene más sentido que alquilar un departamento desde el primer día. Tenés flexibilidad total, no pagás depósito, no firmás contrato.
      </p>
      <p>
        En <Link href="/">Cool Raúl</Link>, muchos nómades se quedan semanas antes de decidir si alquilan algo en la ciudad. El WiFi funciona bien para trabajar, hay mesas en las áreas comunes, la cocina equipada te permite no depender de delivery y los lockers guardan tu equipo de trabajo. Consultanos por tarifas para estadías largas — siempre hay algo mejor que la tarifa noche a noche.
      </p>
    </div>
  );
}

/* ─── Content map ──────────────────────────────────────────────────────── */

const CONTENT_MAP: Record<string, React.ComponentType> = {
  "hostel-en-rosario-como-elegir": HostelChoiceContent,
  "rosario-para-mochileros": MochilerosContent,
  "que-hacer-rosario-de-noche": NocheContent,
  "rosario-en-invierno": RosarioInviernoContent,
  "rosario-nomades-digitales": RosarioNomadeContent,
};

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  const Content = CONTENT_MAP[params.slug];
  if (!post || !Content) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "Cool Raúl Rock'n Hostel" },
    publisher: {
      "@type": "Organization",
      name: "Cool Raúl Rock'n Hostel",
      logo: { "@type": "ImageObject", url: `${BASE}/icon` },
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
    image: post.ogImage,
  };

  // Related posts (other 2 articles)
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.shortTitle, href: `/blog/${post.slug}` },
          ]}
        />

        <article>
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 text-xs text-text-dim mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {post.readingTime} min de lectura
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl text-text-primary leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">{post.description}</p>
          </header>

          <Content />
        </article>

        {/* CTA */}
        <div className="mt-12 glass-card rounded-3xl p-8 text-center glow-purple">
          <h2 className="font-heading text-2xl text-text-primary mb-3">
            ¿Te convenciste de venir a Rosario?
          </h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            Cool Raúl está en San Lorenzo 1670, en el corazón del microcentro. Reservá directo por WhatsApp, sin comisiones.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl("Hola! Leí el blog y quiero reservar en Cool Raúl Hostel.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Reservar por WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-text-primary font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Ver el hostel
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-10" aria-label="Artículos relacionados">
            <h2 className="font-heading text-xl text-text-primary mb-5">Seguí leyendo</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group block focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <p className="text-text-primary font-semibold text-sm mb-1 group-hover:text-primary-light transition-colors">
                    {p.shortTitle}
                  </p>
                  <p className="text-text-dim text-xs leading-relaxed line-clamp-2">{p.description}</p>
                  <p className="text-primary-light text-xs font-semibold mt-3">Leer →</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
