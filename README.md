
## Resumen ejecutivo
Este proyecto es una aplicación **Django 5** que funciona como un **App Store local de plugins basados en Docker Compose**. La aplicación detecta módulos en el directorio `plugins/`, lee su `manifest.json`, los sincroniza con una tabla `AvailableApp` y permite instalarlos, iniciarlos, detenerlos, desinstalarlos y consultar logs desde una interfaz web.

## Arquitectura
- **Core Django (`core/`)**
  - Configuración global (`settings.py`), enrutamiento principal (`urls.py`) y página de inicio simple (`views.py`).
- **Aplicación principal (`app_store/`)**
  - Modelo `AvailableApp` con metadatos de módulos.
  - Vistas para sincronización de plugins, control de ciclo de vida con Docker Compose y obtención de logs.
  - Template único `apps.html` para UI.
- **Plugins (`plugins/`)**
  - Cada plugin contiene `manifest.json`, `Dockerfile` y `docker-compose.yml`.
  - Actualmente hay 3 plugins de ejemplo.

## Flujo funcional principal
1. El usuario abre `/store/`.
2. `get_apps` recorre `PLUGINS_DIR`, valida `manifest.json` y `docker-compose.yml`.
3. Se hace `update_or_create` en la BD para cada plugin válido.
4. Se marca estado de ejecución mediante `docker-compose top`.
5. La UI muestra botones contextuales (instalar, abrir, detener, desinstalar, logs).

## Fortalezas
- Sincronización dinámica entre filesystem y base de datos.
- Operaciones Docker encapsuladas por endpoint.
- UI funcional y clara para control operativo.
- Lógica de estado `running` separada de `is_installed`.

