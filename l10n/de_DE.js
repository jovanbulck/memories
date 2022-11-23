OC.L10N.register(
    "memories",
    {
    "Memories" : "Erinnerungen",
    "Yet another photo management app" : "Eine weitere Foto-Management-App",
    "# Memories\n\nMemories is a *batteries-included* photo management solution for Nextcloud with advanced features including:\n\n- **📸 Timeline**: Sort photos and videos by date taken, parsed from Exif data.\n- **⏪ Rewind**: Jump to any time in the past instantly and relive your memories.\n- **🤖 AI Tagging**: Group photos by people and objects using AI, powered by [recognize](https://github.com/nextcloud/recognize).\n- **🖼️ Albums**: Create albums to group photos and videos together. Then share these albums with others.\n- **🫱🏻‍🫲🏻 External Sharing**: Share photos and videos with people outside of your Nextcloud instance.\n- **📱 Mobile Support**: Works on devices of any shape and size through the web app.\n- **✏️ Edit Metadata**: Edit dates on photos quickly and easily.\n- **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n- **📹 Video Transcoding**: Memories transcodes videos and uses HLS for maximal performance.\n- **⚡️ Performance**: In general, Memories is extremely fast.\n\n## 🌐 Online Demo\n\n- To get an idea of what memories looks and feels like, check out the [public demo](https://memories-demo.radialapps.com/apps/memories/).\n- The demo is read-only and may be slow (free tier VM from [Oracle Cloud](https://www.oracle.com/cloud/free/)).\n- Photo credits go to [Unsplash](https://unsplash.com/) (for individual credits, refer to each folder).\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store.\n1. Perform the recommended [configuration steps](https://github.com/pulsejet/memories/wiki/Extra-Configuration).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos." : "# Erinnerungen\n\nMemories ist eine Fotoverwaltungs-App für Nextcloud mit erweiterten Funktionen, darunter:\n\n- **📸 Zeitleiste**: Fotos und Videos nach Aufnahmedatum sortieren, geparst aus Exif-Daten.\n- **⏪ Zurückspulen**: Springe sofort zu einem beliebigen Zeitpunkt in der Vergangenheit und erlebe deine Erinnerungen erneut.\n- **🤖 KI-Tagging**: Gruppieren Sie Fotos nach Personen und Objekten mithilfe von KI, unterstützt von der App [recognize](https://github.com/nextcloud/recognize).\n- **🖼️ Alben**: Erstellen Sie Alben, um Fotos und Videos zu gruppieren. Dann teilen Sie diese Alben mit anderen.\n- **📁 Ordner**: Durchsuchen Sie Ihre eigenen und freigegebenen Ordner mit einer ähnlichen, effizienten Zeitleiste.\n- **🎦 Diashow**: Zeigen Sie ganz einfach Fotos aus Ihrer Chronik und Ihren Ordnern an.\n- **📱 Mobiler Support**: Funktioniert auf Geräten jeder Form und Größe über die Web-App.\n- **✏️ Metadaten bearbeiten**: Bearbeiten Sie Exif-Daten auf Fotos schnell und einfach.\n- **📦 Archiv**: Speichern Sie Fotos, die Sie nicht in Ihrer Chronik sehen möchten, in einem separaten Ordner.\n- **📹 Videotranskodierung**: Memories transkodiert Videos und verwendet HLS für maximale Leistung.\n- **📷 RAW-Unterstützung**: Zeigen Sie RAW-Fotos von Ihrer Kamera mit der App [Camera RAW Previews](https://apps.nextcloud.com/apps/camerarawpreviews) an.\n- **⚡️ Schnell**: Memories ist extrem schnell. Zeitraum.\n\nUm eine Vorstellung davon zu bekommen, wie Erinnerungen aussehen und sich anfühlen, sehen Sie sich die [öffentliche Demo](https://memories-demo.radialapps.com/apps/memories/) an. Beachten Sie, dass die Demo schreibgeschützt ist und möglicherweise langsam ist, da sie in einer von [Oracle Cloud] (https://www.oracle.com/cloud/free/) bereitgestellten Low-End-VM mit kostenlosem Kontingent ausgeführt wird. Fotonachweise gehen zu [Unsplash](https://unsplash.com/) (Einzelnachweise finden Sie in jedem Ordner).\n\n## 🚀 Installation\n\n1. Installieren Sie die App aus dem Nextcloud App Store\n1. Führen Sie `php ./occ memory:index` aus, um Metadaten-Indizes für vorhandene Fotos zu generieren.\n1. Öffnen Sie die App 📷 Erinnerungen in Nextcloud und legen Sie das Verzeichnis mit Ihren Fotos fest. Fotos aus diesem Verzeichnis werden in der Zeitleiste angezeigt, einschließlich aller Fotos in verschachtelten Unterverzeichnissen.\n1. Die Installation des [Vorschaugenerators](https://github.com/rullzer/previewgenerator) zum Vorgenerieren von Miniaturansichten wird dringend empfohlen.",
    "Settings" : "Einstellungen",
    "Timeline" : "Zeitleiste",
    "Folders" : "Ordner",
    "Favorites" : "Favoriten",
    "Videos" : "Videos",
    "Albums" : "Alben",
    "People" : "Personen",
    "Archive" : "Archiv",
    "On this day" : "An diesem Tag",
    "Tags" : "Schlagworte",
    "Maps" : "Karten",
    "EXIF" : "EXIF",
    "A better photos experience awaits you" : "Ein besseres Fotoerlebnis erwartet Sie",
    "Choose the root folder of your timeline to begin" : "Wählen Sie das Wurzelverzeichnis Ihrer Zeitleiste um zu beginnen",
    "If you just installed Memories, run:" : "Wenn Sie Memorys gerade installiert haben, führen Sie Folgendes aus:",
    "Continue to Memories" : "Weiter zu Memories",
    "Choose again" : "Erneut auswählen",
    "Click here to start" : "Zum Starten hier klicken",
    "You can always change this later in settings" : "Sie können das auch noch später in den Einstellungen ändern",
    "Choose the root of your timeline" : "Start Ihrer Zeitleiste auswählen",
    "The selected folder does not seem to be valid. Try again." : "Der ausgewählte Ordner scheint ungültig zu sein. Versuchen Sie es nochmal.",
    "Found {total} photos in {path}" : "{total} Fotos gefunden in {path}",
    "Failed to get Exif data. Metadata may be lost!" : "Exif-Daten konnten nicht abgerufen werden. Metadaten können verloren gehen!",
    "No Exif data found! Continue?" : "Keine Exif-Daten gefunden! Fortsetzen?",
    "Image saved successfully" : "Bild erfolgreich gespeichert",
    "Error saving image" : "Fehler beim Speichern des Bildes",
    "Unsaved changes" : "Ungespeicherte Änderungen",
    "Drop changes" : "Änderungen verwerfen",
    "Edit" : "Bearbeiten",
    "Loading …" : "Lade …",
    "Cancel" : "Abbrechen",
    "Delete" : "Löschen",
    "Remove from album" : "Aus dem Album entfernen",
    "Download" : "Herunterladen",
    "Favorite" : "Favorisieren",
    "Unarchive" : "Dearchivieren",
    "Edit Date/Time" : "Datum/Uhrzeit bearbeiten",
    "View in folder" : "In Ordner anzeigen",
    "Add to album" : "Zum Album hinzufügen",
    "Move to another person" : "Zu einer anderen Person verschieben",
    "Remove from person" : "Von der Person entfernen",
    "You are about to download a large number of files. Are you sure?" : "Sie sind dabei, eine große Anzahl an Dateien herunterzuladen. Sind Sie sich sicher?",
    "You are about to delete a large number of files. Are you sure?" : "Sie sind dabei, eine große Anzahl an Dateien zu löschen. Sind Sie sich sicher?",
    "You are about to touch a large number of files. Are you sure?" : "Sie sind im Begriff, eine große Anzahl von Dateien zu ändern. Sind Sie sich sicher?",
    "Could not remove photos from album" : "Fotos konnten nicht aus dem Album entfernt werden",
    "_{n} selected_::_{n} selected_" : ["{n} ausgewählt","{n} ausgewählt"],
    "Timeline Path" : "Pfad der Zeitleiste",
    "Folders Path" : "Ordnerpfad",
    "Show hidden folders" : "Zeige versteckte Ordner",
    "Square grid mode" : "Quadratischer Gittermodus",
    "Choose Timeline Paths" : "Pfade der Zeitleiste auswählen",
    "Choose the root for the folders view" : "Wählen Sie das Stammverzeichnis für die Ordneransicht",
    "Your Timeline" : "Ihre Zeitleiste",
    "Failed to load some photos" : "Laden einiger Fotos fehlgeschlagen",
    "Share" : "Teilen",
    "Sidebar" : "Seitenleiste",
    "Close" : "Schließen",
    "Previous" : "Zurück",
    "Next" : "Nächste",
    "Video sharing not supported yet" : "Teilen von Videos wird bislang nicht unterstützt",
    "Cannot share this type of data" : "Diese Art von Daten kann nicht geteilt werden",
    "Processing … {n}/{m}" : "Verarbeite… {n}/{m}",
    "{n} photos added to album" : "{n} Fotos zum Album hinzugefügt",
    "Search for collaborators" : "Suche nach Mitbearbeitenden",
    "Search people or groups" : "Suchen nach Personen oder Gruppen",
    "Add {collaboratorLabel} to the collaborators list" : "{collaboratorLabel} zur Liste der Mitarbeitenden hinzufügen",
    "No collaborators available" : "Keine Mitarbeitenden verfügbar",
    "Remove {collaboratorLabel} from the collaborators list" : "{collaboratorLabel} aus der Liste der Mitarbeitenden löschen",
    "Copy the public link" : "Den öffentlichen Link kopieren",
    "Delete the public link" : "Den öffentlichen Link löschen",
    "Add people or groups who can edit your album" : "Personen oder Gruppen hinzufügen, die Ihr Album bearbeiten können",
    "Public link copied!" : "Öffentlicher Link kopiert!",
    "Copy public link" : "Öffentlichen Link kopieren",
    "Share via public link" : "Als öffentlichen Link teilen",
    "Failed to fetch collaborators list." : "Liste der Mitbearbeitenden konnte nicht abgerufen werden.",
    "Public link" : "Öffentlicher Link",
    "Failed to fetch album." : "Album konnte nicht abgerufen werden.",
    "Failed to update album." : "Album konnte nicht aktualisiert werden.",
    "New album" : "Neues Album",
    "Create new album" : "Neues Album erstellen",
    "Edit album details" : "Albumdetails bearbeiten",
    "Could not load the selected album" : "Gewähltes Album konnte nicht geladen werden",
    "Remove Album" : "Album entfernen",
    "Failed to delete {name}." : "Fehler beim Löschen von {name}.",
    "Name of the album" : "Name des Albums",
    "Location of the album" : "Ort des Albums",
    "Go back to the previous view." : "Zur vorherigen Ansicht zurückgehen.",
    "Go to the add collaborators view." : "Zur Ansicht Mitbearbeitende hinzufügen wechseln.",
    "Back to the new album form." : "Zurück zur neuen Albumform.",
    "Back" : "Zurück",
    "Add collaborators" : "Mitarbeitende hinzufügen",
    "Save" : "Speichern",
    "Create album" : "Erstelle Album",
    "Add selection to album {albumName}" : "Auswahl zum Album {albumName} hinzufügen",
    "Create a new album." : "Ein neues Album erstellen.",
    "_Share with %n user_::_Share with %n users_" : ["Mit %n Benutzer teilen","Mit %n Benutzern telken"],
    "_%n item_::_%n items_" : ["%n Element","%n Elemente"],
    "Save collaborators for this album." : "Mitbearbeitende für dieses Album speichern.",
    "Share Album" : "Album teilen",
    "Year" : "Jahr",
    "Month" : "Monat",
    "Day" : "Tag",
    "Time" : "Zeit",
    "Hour" : "Stunde",
    "Minute" : "Minute",
    "Update Exif" : "Exif aktualisieren",
    "Newest" : "Neueste",
    "Oldest" : "Älteste",
    "This feature modifies files in your storage to update Exif data." : "Diese Funktion ändert Dateien in Ihrem Speicher, um Exif-Daten zu aktualisieren.",
    "Exercise caution and make sure you have backups." : "Seien Sie vorsichtig und stellen Sie sicher, dass Sie Backups haben.",
    "Loading data … {n}/{m}" : "Daten werden geladen… {n}/{m}",
    "Remove person" : "Person entfernen",
    "Are you sure you want to remove {name}?" : "Soll {name} wirklich entfernt werden?",
    "Name" : "Name",
    "Rename person" : "Person umbenennen",
    "Update" : "Aktualisieren",
    "Failed to rename {oldName} to {name}." : "Fehler beim Umbenennen von {oldName} in {name}.",
    "Merge {name} with person" : "{name} mit Person zusammenführen",
    "Are you sure you want to merge {name} with {newName}?" : "Sind Sie sicher, dass Sie {name} mit {newName} zusammenführen möchten?",
    "Too many failures, aborting" : "Zu viele Fehler, Abbruch",
    "Error while moving {basename}" : "Fehler beim Verschieben von {basename}",
    "Failed to move {name}." : "{name} konnte nicht verschoben werden.",
    "Move selected photos to person" : "Ausgewählte Fotos zu einer Person verschieben",
    "Are you sure you want to move the selected photos from {name} to {newName}?" : "Möchten Sie die ausgewählten Fotos wirklich von {name} nach {newName} verschieben?",
    "Share Folder" : "Ordner teilen",
    "You cannot share the root folder" : "Sie können den Wurzelordner nicht teilen",
    "Use the sidebar to share this folder." : "Verwenden Sie die Seitenleiste, um diesen Ordner zu teilen.",
    "If you create a public link share, click on refresh and a corresponding link to Memories will be shown below." : "Wenn Sie eine öffentliche Linkfreigabe erstellen, klicken Sie auf Aktualisieren und ein entsprechender Link zu Memories wird unten angezeigt.",
    "Refresh" : "Aktualisieren",
    "Remove" : "Entfernen",
    "Add Path" : "Pfad hinzufügen",
    "Add a root to your timeline" : "Einen Start Ihrer Zeitleiste hinzufügen",
    "Share album" : "Album teilen",
    "Delete album" : "Album löschen",
    "Merge with different person" : "Mit einer anderen Person zusammenführen",
    "Mark person in preview" : "Person in Vorschau markieren",
    "Share folder" : "Ordner teilen",
    "Move left" : "Nach links verschieben",
    "Move right" : "Nach rechts verschieben",
    "Save as" : "Speichern als",
    "Reset" : "Zurücksetzen",
    "All changes will be lost." : "Alle Änderungen gehen verloren.",
    "Are you sure you want to continue?" : "Sind Sie sich sicher, dass Sie fortsetzen wollen?",
    "Continue" : "Fortsetzen",
    "Undo" : "Rückgängig",
    "Redo" : "Wiederherstellen",
    "Show original image" : "Originalbild anzeigen",
    "Zoom in" : "Hineinzoomen",
    "Zoom out" : "Hinauszoomen",
    "Toggle zoom menu" : "Zoom-Menü umschalten",
    "Adjust" : "Anpassen",
    "Fine-tune" : "Feinabstimmung",
    "Filters" : "Filter",
    "Watermark" : "Wasserzeichen",
    "Draw" : "Zeichnen",
    "Resize" : "Größe ändern",
    "Invalid image." : "Ungültiges Bild.",
    "Error while uploading the image." : "Fehler beim Hochladen des Bildes.",
    "are not images" : "Sind keine Bilder",
    "is not an image" : "Ist kein Bild",
    "to be uploaded" : "zum Hochladen",
    "Crop" : "Zuschneiden",
    "Original" : "Original",
    "Custom" : "Benutzerdefiniert",
    "Square" : "Quadrat",
    "Landscape" : "Querformat",
    "Portrait" : "Hochformat",
    "Ellipse" : "Ellipse",
    "Classic TV" : "Klassisches Fernsehen",
    "CinemaScope" : "CinemaScope",
    "Arrow" : "Pfeil",
    "Blur" : "Verwischen",
    "Brightness" : "Helligkeit",
    "Contrast" : "Kontrast",
    "Un-flip X" : "Spiegeln X rückgängig",
    "Flip X" : "Spiegeln X",
    "Un-flip Y" : "Spiegeln Y rückgängig",
    "Flip Y" : "Spiegeln Y",
    "HSV" : "HSV",
    "Hue" : "Farbton",
    "Saturation" : "Sättigung",
    "Value" : "Wert",
    "Image" : "Bild",
    "Importing …" : "Importiere…",
    "+ Add image" : "+ Bild hinzufügen",
    "Line" : "Linie",
    "Pen" : "Stift",
    "Polygon" : "Polygon",
    "Sides" : "Seiten",
    "Rectangle" : "Rechteck",
    "Corner Radius" : "Eckenradius",
    "Width in pixels" : "Breite in Pixel",
    "Height in pixels" : "Höhe in Pixel",
    "Toggle ratio lock" : "Verhältnis-Sperre umschalten",
    "Reset to original image size" : "Auf ursprüngliche Bildgröße zurücksetzen",
    "Rotate" : "Drehen",
    "Text" : "Text",
    "Text spacing" : "Text-Abstand",
    "Text alignment" : "Textausrichtung",
    "Font family" : "Schriftenfamilie",
    "Size" : "Größe",
    "Letter spacing" : "Buchstaben-Abstand",
    "Line height" : "Zeilenhöhe",
    "Warmth" : "Wärme",
    "+ Add watermark" : "+ Wasserzeichen hinzufügen",
    "Choose watermark type" : "Wasserzeichentyp auswählen",
    "Upload watermark" : "Wasserzeichen hochladen",
    "Add as text" : "Als Text hinzufügen",
    "Padding" : "Auffüllen",
    "Shadow" : "Schatten",
    "Horizontal" : "Horizontal",
    "Vertical" : "Vertikal",
    "Opacity" : "Deckkraft",
    "Position" : "Position",
    "Stroke" : " Strich",
    "Save image as" : "Bild speichern als",
    "Extension" : "Erweiterung",
    "Name is required." : "Name ist erforderlich.",
    "Quality" : "Qualität",
    "Saved image size (width x height)" : "Gespeicherte Bildgröße (Breite x Höhe)",
    "Note that the selected crop area is lower than the applied resize which might cause quality decrease" : "Beachten Sie, dass der ausgewählte Zuschneidebereich kleiner ist als die angewendete Größenänderung, was zu Qualitätseinbußen führen kann",
    "Actual size (100%)" : "Tatsächliche Größe (100%)",
    "Fit size" : "Größe anpassen",
    "Transcoding failed." : "Transkodierung fehlgeschlagen.",
    "Auto" : "Automatisch",
    "Shared Folder" : "Geteilter Ordner",
    "Failed to create {albumName}." : "{albumName} konnte nicht erstellt werden.",
    "Failed to rename {currentAlbumName} to {newAlbumName}." : "{currentAlbumName} konnte nicht in {newAlbumName} umbenannt werden.",
    "General Failure" : "Allgemeiner Fehler",
    "Error: {msg}" : "Fehler: {msg}",
    "Failed to delete files." : "Löschen der Dateien fehlgeschlagen.",
    "Failed to delete {fileName}." : "{fileName} konnte nicht gelöscht werden.",
    "Failed to download some files." : "Einige Dateien konnten nicht heruntergeladen werden.",
    "Failed to favorite files." : "Favorisieren von Dateien fehlgeschlagen.",
    "Failed to favorite some files." : "Einige Dateien konnten nicht zu den Favoriten hinzugefügt werden.",
    "Failed to favorite {fileName}." : "{fileName} konnte nicht zu den Favoriten hinzugefügt werden."
},
"nplurals=2; plural=(n != 1);");
