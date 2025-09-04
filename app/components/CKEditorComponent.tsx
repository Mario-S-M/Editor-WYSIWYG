"use client";

import React from "react";
import styles from "./CKEditorComponent.module.css";
import "../ckeditor-theme.css";
import {
  ClassicEditor,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  BlockQuote,
  Bold,
  Bookmark,
  CKBox,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  CloudServices,
  CodeBlock,
  Essentials,
  FindAndReplace,
  Font,
  Heading,
  Highlight,
  HorizontalLine,
  GeneralHtmlSupport,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Base64UploadAdapter,
  PictureEditing,
  Indent,
  IndentBlock,
  TextPartLanguage,
  Link,
  LinkImage,
  List,
  ListProperties,
  TodoList,
  MediaEmbed,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Style,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  WordCount,
  Fullscreen,
  Editor,
} from "ckeditor5";

import {
  CaseChange,
  ExportPdf,
  ExportWord,
  FormatPainter,
  ImportWord,
  MergeFields,
  MultiLevelList,
  SlashCommand,
  TableOfContents,
  Template,
  LineHeight,
} from "ckeditor5-premium-features";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

const LICENSE_KEY = "GPL";
const CKBOX_TOKEN_URL = "";

if (LICENSE_KEY === "GPL") {
  console.log(
    "Premium features are disabled, because they require a commercial license key."
  );
}

// Reduced material colors for font colors
const REDUCED_MATERIAL_COLORS = [
  { label: "Red 50", color: "#ffebee" },
  { label: "Purple 50", color: "#f3e5f5" },
  { label: "Indigo 50", color: "#e8eaf6" },
  { label: "Blue 50", color: "#e3f2fd" },
  { label: "Cyan 50", color: "#e0f7fa" },
  { label: "Teal 50", color: "#e0f2f1" },
  { label: "Light green 50", color: "#f1f8e9" },
  { label: "Lime 50", color: "#f9fbe7" },
  { label: "Amber 50", color: "#fff8e1" },
  { label: "Orange 50", color: "#fff3e0" },
  { label: "Grey 50", color: "#fafafa" },
  { label: "Blue grey 50", color: "#eceff1" },
  { label: "Red 100", color: "#ffcdd2" },
  { label: "Purple 100", color: "#e1bee7" },
  { label: "Indigo 100", color: "#c5cae9" },
  { label: "Blue 100", color: "#bbdefb" },
  { label: "Cyan 100", color: "#b2ebf2" },
  { label: "Teal 100", color: "#b2dfdb" },
  { label: "Light green 100", color: "#dcedc8" },
  { label: "Lime 100", color: "#f0f4c3" },
  { label: "Amber 100", color: "#ffecb3" },
  { label: "Orange 100", color: "#ffe0b2" },
  { label: "Grey 100", color: "#f5f5f5" },
  { label: "Blue grey 100", color: "#cfd8dc" },
];

// Sample emoji array for special characters
const EMOJIS_ARRAY = [
  { character: "🙈", title: "See-No-Evil Monkey" },
  { character: "🙄", title: "Face With Rolling Eyes" },
  { character: "🙃", title: "Upside Down Face" },
  { character: "🙂", title: "Slightly Smiling Face" },
  { character: "😴", title: "Sleeping Face" },
  { character: "😳", title: "Flushed Face" },
  { character: "😱", title: "Face Screaming in Fear" },
  { character: "😭", title: "Loudly Crying Face" },
  { character: "😬", title: "Grimacing Face" },
  { character: "😩", title: "Weary Face" },
  { character: "😢", title: "Crying Face" },
  { character: "😡", title: "Pouting Face" },
  { character: "😞", title: "Disappointed Face" },
  { character: "😜", title: "Face with Stuck-Out Tongue and Winking Eye" },
  { character: "😚", title: "Kissing Face With Closed Eyes" },
  { character: "😘", title: "Face Throwing a Kiss" },
  { character: "😔", title: "Pensive Face" },
  { character: "😒", title: "Unamused Face" },
  { character: "😑", title: "Expressionless Face" },
  { character: "😐", title: "Neutral Face" },
  { character: "😏", title: "Smirking Face" },
  { character: "😎", title: "Smiling Face with Sunglasses" },
  { character: "😍", title: "Smiling Face with Heart-Eyes" },
  { character: "😌", title: "Relieved Face" },
  { character: "😋", title: "Face Savoring Delicious Food" },
  { character: "😊", title: "Smiling Face with Smiling Eyes" },
  { character: "😉", title: "Winking Face" },
  { character: "😈", title: "Smiling Face With Horns" },
  { character: "😇", title: "Smiling Face with Halo" },
  {
    character: "😆",
    title: "Smiling Face with Open Mouth and Tightly-Closed Eyes",
  },
  { character: "😅", title: "Smiling Face with Open Mouth and Cold Sweat" },
  { character: "😄", title: "Smiling Face with Open Mouth and Smiling Eyes" },
  { character: "😃", title: "Smiling Face with Open Mouth" },
  { character: "😂", title: "Face with Tears of Joy" },
  { character: "😁", title: "Grinning Face with Smiling Eyes" },
  { character: "😀", title: "Grinning Face" },
  { character: "🥺", title: "Pleading Face" },
  { character: "🥵", title: "Hot Face" },
  { character: "🥴", title: "Woozy Face" },
  { character: "🥳", title: "Partying Face" },
  { character: "🥰", title: "Smiling Face with Hearts" },
  { character: "🤭", title: "Face with Hand Over Mouth" },
  { character: "🤪", title: "Zany Face" },
  { character: "🤩", title: "Grinning Face with Star Eyes" },
  { character: "🤦", title: "Face Palm" },
  { character: "🤤", title: "Drooling Face" },
  { character: "🤣", title: "Rolling on the Floor Laughing" },
  { character: "🤔", title: "Thinking Face" },
  { character: "🤞", title: "Crossed Fingers" },
  { character: "🙏", title: "Person with Folded Hands" },
  { character: "🙌", title: "Person Raising Both Hands in Celebration" },
  { character: "🙋", title: "Happy Person Raising One Hand" },
  { character: "🤷", title: "Shrug" },
  { character: "🤗", title: "Hugging Face" },
  { character: "🖤", title: "Black Heart" },
  { character: "🔥", title: "Fire" },
  { character: "💰", title: "Money Bag" },
  { character: "💯", title: "Hundred Points Symbol" },
  { character: "💪", title: "Flexed Biceps" },
  { character: "💩", title: "Pile of Poo" },
  { character: "💥", title: "Collision" },
  { character: "💞", title: "Revolving Hearts" },
  { character: "💜", title: "Purple Heart" },
  { character: "💚", title: "Green Heart" },
  { character: "💙", title: "Blue Heart" },
  { character: "💗", title: "Growing Heart" },
  { character: "💖", title: "Sparkling Heart" },
  { character: "💕", title: "Two Hearts" },
  { character: "💔", title: "Broken Heart" },
  { character: "💓", title: "Beating Heart" },
  { character: "💐", title: "Bouquet" },
  { character: "💋", title: "Kiss Mark" },
  { character: "💀", title: "Skull" },
  { character: "👑", title: "Crown" },
  { character: "👏", title: "Clapping Hands Sign" },
  { character: "👍", title: "Thumbs Up Sign" },
  { character: "👌", title: "OK Hand Sign" },
  { character: "👉", title: "Backhand Index Pointing Right" },
  { character: "👈", title: "Backhand Index Pointing Left" },
  { character: "👇", title: "Backhand Index Pointing Down" },
  { character: "👀", title: "Eyes" },
  { character: "🎶", title: "Multiple Musical Notes" },
  { character: "🎊", title: "Confetti Ball" },
  { character: "🎉", title: "Party Popper" },
  { character: "🎈", title: "Balloon" },
  { character: "🎂", title: "Birthday Cake" },
  { character: "🎁", title: "Wrapped Gift" },
  { character: "🌹", title: "Rose" },
  { character: "🌸", title: "Cherry Blossom" },
  { character: "🌞", title: "Sun with Face" },
  { character: "❤️", title: "Red Heart" },
  { character: "❣️", title: "Heavy Heart Exclamation Mark Ornament" },
  { character: "✨", title: "Sparkles" },
  { character: "✌️", title: "Victory Hand" },
  { character: "✅", title: "Check Mark Button" },
  { character: "♥️", title: "Heart Suit" },
  { character: "☺️", title: "Smiling Face" },
  { character: "☹️", title: "Frowning Face" },
  { character: "☀️", title: "Sun" },
];

// Template definitions
const TEMPLATE_DEFINITIONS = [
  {
    title: "Signature (multi-line)",
    data: `<p style='margin-left:2em;'><span><strong>I hereby verify that the aforementioned report has undergone thorough factual verification and reflects the most current information.</strong></span></p>
			<p style='margin-left:22em;'><br>
			<span>Signature: __________&nbsp;&nbsp;</span><br>
			<span>Name:&nbsp;</span><br>
			<span>Title:&nbsp;</span><br>
			<span>Date:</span></p>`,
    description: "Author signature with statement",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 21 21"><g clip-path="url(#a)"><path fill="#E8DFF7" d="M19.833.5H1.611a.889.889 0 0 0-.889.889V19.61a.89.89 0 0 0 .89.889h18.221a.89.89 0 0 0 .89-.889V1.39a.889.889 0 0 0-.89-.889Z"/></g></svg>',
  },
  {
    title: "Company Letterhead",
    data: `<table style='border-width:0'>
			<colgroup>
				<col style='width:30%;'>
				<col style='width:70%;'>
			</colgroup>
			<tbody>
				<tr>
					<td style='width:30%;'>
						<figure class='image'>
							<picture>
								<img src='https://via.placeholder.com/150x50/743CCD/FFFFFF?text=LOGO'>
							</picture>
						</figure>
					</td>
					<td>
						<span>
							<a href='mailto:info@company.co'>
							<span style='background-color:transparent;color:#1155cc;'>
							<u>info@company.co</u>
							</span>
							</a>
							<br>
						<span>123 Business St. Suite 100</span><br>
						<span>+1-555-123-4567</span></span>
						<div></div>
					</td>
				</tr>
			</tbody>
		</table>`,
    description: "Document letterhead with logo",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 21 21"><g clip-path="url(#a)"><path fill="#E8DFF7" d="M19.611.5H1.39a.889.889 0 0 0-.889.889V19.61c0 .491.398.889.889.889h18.22a.889.889 0 0 0 .889-.889V1.39a.889.889 0 0 0-.888-.89Z"/></g></svg>',
  },
];

/**
 * Enrich the special characters plugin with emojis.
 */
function SpecialCharactersEmoji(editor: Editor) {
  if (!editor.plugins.get("SpecialCharacters")) {
    return;
  }

  // Make sure Emojis are last on the list.
  editor.plugins.get("SpecialCharacters").addItems("Emoji", EMOJIS_ARRAY);
}
const initialData = `
<h2>Handheld emperor</h2>

<p>Nintendo, a Japanese electronics company, started as a hanafuda cards manufacturer in 1889. In the mid-1970s, they entered the early video games market and became famous for their home video and handheld game consoles. Nintendo introduced consoles like the NES, SNES, and Wii. But the most revolutionary was for sure the Game Boy.</p>

<h3>A countdown of Nintendo handhelds</h3>

<figure class="image image-style-side">
  <img
    src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/game_boy.jpg"
    alt="The Nintendo Game Boy handheld console"
  />
  <figcaption>
    The Nintendo "flagship" - handheld Game Boy
  </figcaption>
</figure>

<ol>
  <li>Game & Watch was Nintendo's first product offering out-of-home gaming. From 1980 to 1991, over a hundred games were released, gaining great popularity.</li>
  <li>In 1989, the original Game Boy was released. The new amazing machine utilized a cartridge system, allowing the users to play a multitude of games of all kinds. This was a historical game-changer.
    <ol>
      <li>It was followed by a number of versions, such as Game Boy Color or Game Boy Advance.</li>
    </ol>
  </li>
  <li>In 2004, Nintendo introduced a new console family called the Nintendo DS. It sported a dual LCD screen in a folded shell, with the lower one being a touchscreen.
    <ol>
      <li>The most prominent development was Nintendo 3DS, which offered a 3D display.</li>
    </ol>
  </li>
  <li>2017 brought the hybrid experience for both couch-preferring gamers and handheld enthusiasts with the release of the Nintendo Switch. It offers both a TV mode with high-definition graphics and a handheld mode using the built-in 6.2" display.</li>
</ol>

<h3>Handheld consoles' popularity</h3>

<p>While the most recent Switch is a prevalent choice nowadays, the 2DS and 3DS consoles are still popular. The king, however, is none other than the original wonder — the Game Boy.</p>

<figure class="table">
  <table>
    <thead>
      <tr>
        <th>Console</th>
        <th>Production dates</th>
        <th>Pieces sold (2021)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Game & Watch</td>
        <td>1980-1991, 2020-2021</td>
        <td>44 million</td>
      </tr>
      <tr>
        <td>Game Boy</td>
        <td>1989-2010</td>
        <td>201 million <sup>1</sup></td>
      </tr>
      <tr>
        <td>Nintendo DS</td>
        <td>2011-2020</td>
        <td>76 million <sup>2</sup></td>
      </tr>
      <tr>
        <td>Switch</td>
        <td>since 2017</td>
        <td>140 million <sup>3</sup></td>
      </tr>
    </tbody>
  </table>
  <figcaption>
    <sup>1</sup> 119 million Game Boy and Game Boy Color variants, 82 million Game Boy Advance variants.<br>
    <sup>2</sup> Including all versions: DS, DSi, 2DS, 3DS, and New 2DS/3DS variants.<br>
    <sup>3</sup> As of early 2024.
  </figcaption>
</figure>

<h3>Handheld gaming experience</h3>

<blockquote>
  <p>"It's dangerous to go alone! Take this." <strong>The Legend of Zelda, 1986</strong></p>
</blockquote>

<p>Games offered by Nintendo include multiple genres, out of which the famous platformer arcade Super Mario 🎮 and the adventure role-play Legend of Zelda ⚔️ series are probably the most iconic.</p>

<p>Games that can be played on the handheld family include (examples of games listed):</p>

<ul>
  <li>Action & adventure games
    <ul>
      <li>The Legend of Zelda series</li>
      <li>Chrono Trigger</li>
    </ul>
  </li>
  <li>First-person action games
    <ul>
      <li>Splatoon</li>
    </ul>
  </li>
  <li>Role-playing games (RPG)
    <ul>
      <li>The Pokémon series</li>
      <li>The Final Fantasy series</li>
    </ul>
  </li>
</ul>
`;

interface SavedDocument {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  wordCount: number;
  metadata: {
    format: string;
    editor: string;
    version: string;
  };
}

export default function CKEditorComponent() {
  const [editorInstance, setEditorInstance] =
    React.useState<ClassicEditor | null>(null);
  const [savedDocuments, setSavedDocuments] = React.useState<SavedDocument[]>(
    []
  );
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(false);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    // Aplicar el atributo data-theme al documento
    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    // Guardar preferencia del tema en localStorage
    localStorage.setItem("editorTheme", newTheme.toString());
  };

  const saveToJSON = () => {
    if (!editorInstance) {
      alert("El editor no está listo aún.");
      return;
    }

    const htmlContent = editorInstance.getData();
    const documentData = {
      id: Date.now(),
      title: `Documento ${savedDocuments.length + 1}`,
      content: htmlContent,
      createdAt: new Date().toISOString(),
      wordCount: editorInstance.plugins.get("WordCount")?.characters || 0,
      metadata: {
        format: "HTML",
        editor: "CKEditor5",
        version: "1.0",
      },
    };

    const updatedDocuments = [...savedDocuments, documentData];
    setSavedDocuments(updatedDocuments);

    // Guardar en localStorage
    localStorage.setItem("editorDocuments", JSON.stringify(updatedDocuments));

    console.log("Documento guardado en JSON:", documentData);
    alert("Documento guardado exitosamente!");
  };

  const loadFromJSON = (documentId: number) => {
    const document = savedDocuments.find((doc) => doc.id === documentId);
    if (document && editorInstance) {
      editorInstance.setData(document.content);
      console.log("Documento cargado:", document);
    }
  };

  const exportAllToJSON = () => {
    const jsonData = JSON.stringify(savedDocuments, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "editor-documents.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  React.useEffect(() => {
    // Cargar documentos guardados al inicializar
    const saved = localStorage.getItem("editorDocuments");
    if (saved) {
      setSavedDocuments(JSON.parse(saved));
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem("editorTheme");
    if (savedTheme === "true") {
      setIsDarkTheme(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  // Efecto para aplicar tema oscuro al editor cuando cambie el estado
  React.useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkTheme]);

  /* Función para cargar archivos de audio (comentada por no uso actual)
  const handleAudioUpload = () => {
    if (!editorInstance) {
      alert("El editor no está listo aún.");
      return;
    }

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "audio/*";

    input.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file && file.type.startsWith("audio/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const audioDataUrl = e.target?.result as string;

          const audioHtml = `
            <div class="audioContainer">
              <div class="audioHeader">
                <span class="audioIcon">🎵</span>
                <strong class="audioFilename">${file.name}</strong>
              </div>
              <audio controls class="audioPlayer">
                <source src="${audioDataUrl}" type="${file.type}">
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
            <p>&nbsp;</p>
          `;

          // Insertar usando insertHtml
          try {
            editorInstance.execute("insertHtml", audioHtml);
          } catch (error) {
            console.error("Error insertando audio:", error);
            alert("Error al insertar el audio. Inténtalo de nuevo.");
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Por favor selecciona un archivo de audio válido.");
      }

      target.value = "";
    };

    input.click();
  };
  */

  // Create toolbar items array based on license
  const toolbarItems = [
    // --- Document-wide tools --------------------------------------------------------------
    "undo",
    "redo",
    "|",
    "findAndReplace",
    "selectAll",
    "|",

    // --- "Insertables" ----------------------------------------------------------------
    "link",
    "bookmark",
    "insertImage",
    "insertTable",
    "blockQuote",
    "mediaEmbed",
    "codeBlock",
    "pageBreak",
    "horizontalLine",
    "specialCharacters",
    "-",

    // --- Block-level formatting -------------------------------------------------------
    "heading",
    "style",
    "|",

    // --- Basic styles, font and inline formatting -------------------------------------
    "bold",
    "italic",
    "underline",
    "strikethrough",
    {
      label: "Basic styles",
      icon: "text",
      items: [
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "highlight",
        "superscript",
        "subscript",
        "code",
        "|",
        "textPartLanguage",
        "|",
      ],
    },
    "removeFormat",
    "|",

    // --- Text alignment ------------------------------------------------------------
    "alignment",
    ...(LICENSE_KEY !== "GPL" ? ["lineHeight"] : []),
    "|",

    // --- Lists and indentation -----------------------------------------------------
    "bulletedList",
    "numberedList",
    "todoList",
    "|",
    "outdent",
    "indent",
    "|",

    // --- Fullscreen mode -----------------------------------------------------------
    "fullscreen",
  ];

  return (
    <>
      {/* Botón de cambio de tema */}
      <button
        onClick={toggleTheme}
        className={styles.themeToggle}
        title={`Cambiar a tema ${isDarkTheme ? "claro" : "oscuro"}`}
      >
        {isDarkTheme ? "☀️" : "🌙"}
        {isDarkTheme ? "Tema Claro" : "Tema Oscuro"}
      </button>

      <div
        className={`${styles.editorContainer} ${
          isDarkTheme ? styles.dark : styles.light
        }`}
      >
        {/* Panel de control de documentos */}
        <div className={styles.documentsPanel}>
          <h3>Gestión de documentos JSON</h3>
          <button
            onClick={saveToJSON}
            className={`${styles.actionButton} ${styles.saveButton}`}
          >
            💾 Guardar en JSON
          </button>
          <button
            onClick={exportAllToJSON}
            className={`${styles.actionButton} ${styles.exportButton}`}
          >
            📥 Exportar todos los documentos
          </button>

          {savedDocuments.length > 0 && (
            <div className={styles.savedDocumentsSection}>
              <h4>Documentos guardados:</h4>
              <div className={styles.documentsGrid}>
                {savedDocuments.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => loadFromJSON(doc.id)}
                    className={styles.documentButton}
                  >
                    📄 {doc.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.editorWrapper}>
          <CKEditor
            editor={ClassicEditor}
            config={{
              plugins: [
                Alignment,
                Autoformat,
                AutoImage,
                AutoLink,
                BlockQuote,
                Bold,
                Bookmark,
                CloudServices,
                Code,
                CodeBlock,
                Essentials,
                FindAndReplace,
                Font,
                Fullscreen,
                GeneralHtmlSupport,
                Heading,
                Highlight,
                HorizontalLine,
                Image,
                ImageCaption,
                ImageInsert,
                ImageResize,
                ImageStyle,
                ImageToolbar,
                ImageUpload,
                Base64UploadAdapter,
                Indent,
                IndentBlock,
                Italic,
                Link,
                LinkImage,
                List,
                ListProperties,
                MediaEmbed,
                Mention,
                PageBreak,
                Paragraph,
                PasteFromOffice,
                PictureEditing,
                RemoveFormat,
                SpecialCharacters,
                SpecialCharactersEmoji,
                SpecialCharactersEssentials,
                Strikethrough,
                Style,
                Subscript,
                Superscript,
                Table,
                TableCaption,
                TableCellProperties,
                TableColumnResize,
                TableProperties,
                TableToolbar,
                TextPartLanguage,
                TextTransformation,
                TodoList,
                Underline,
                WordCount,

                // Include CKBox plugin only if the CKBOX_TOKEN_URL is provided.
                ...(CKBOX_TOKEN_URL ? [CKBox] : []),

                // Include premium features only if the license key is not GPL.
                ...(LICENSE_KEY !== "GPL"
                  ? [
                      CaseChange,
                      ExportPdf,
                      ExportWord,
                      FormatPainter,
                      ImportWord,
                      LineHeight,
                      MergeFields,
                      MultiLevelList,
                      SlashCommand,
                      TableOfContents,
                      Template,
                    ]
                  : []),
              ],
              licenseKey: LICENSE_KEY,
              toolbar: {
                shouldNotGroupWhenFull: true,
                items: toolbarItems,
              },
              fullscreen: {
                onEnterCallback: () => {
                  const editable = document.querySelector(
                    ".ck-fullscreen__editable"
                  );
                  if (editable) {
                    editable.setAttribute("data-demo-type", "feature-rich");
                  }
                },
              },
              fontFamily: {
                supportAllValues: true,
              },
              fontSize: {
                options: [10, 12, 14, "default", 18, 20, 22],
                supportAllValues: true,
              },
              fontColor: {
                columns: 12,
                colors: REDUCED_MATERIAL_COLORS,
              },
              fontBackgroundColor: {
                columns: 12,
                colors: REDUCED_MATERIAL_COLORS,
              },
              heading: {
                options: [
                  {
                    model: "paragraph",
                    title: "Paragraph",
                    class: "ck-heading_paragraph",
                  },
                  {
                    model: "heading1",
                    view: "h1",
                    title: "Heading 1",
                    class: "ck-heading_heading1",
                  },
                  {
                    model: "heading2",
                    view: "h2",
                    title: "Heading 2",
                    class: "ck-heading_heading2",
                  },
                  {
                    model: "heading3",
                    view: "h3",
                    title: "Heading 3",
                    class: "ck-heading_heading3",
                  },
                  {
                    model: "heading4",
                    view: "h4",
                    title: "Heading 4",
                    class: "ck-heading_heading4",
                  },
                  {
                    model: "heading5",
                    view: "h5",
                    title: "Heading 5",
                    class: "ck-heading_heading5",
                  },
                  {
                    model: "heading6",
                    view: "h6",
                    title: "Heading 6",
                    class: "ck-heading_heading6",
                  },
                ],
              },
              htmlSupport: {
                allow: [
                  // Enables all HTML features.
                  {
                    name: /.*/,
                    attributes: true,
                    classes: true,
                    styles: true,
                  },
                ],
                disallow: [
                  {
                    attributes: [
                      { key: /^on(.*)$/i, value: true },
                      {
                        key: /.*/,
                        value:
                          /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i,
                      },
                      {
                        key: /.*/,
                        value: /data:(?!image\/(png|jpeg|gif|webp))/i,
                      },
                    ],
                  },
                  { name: "script" },
                ],
              },
              image: {
                resizeOptions: [
                  {
                    name: "resizeImage:original",
                    label: "Default image width",
                    value: null,
                  },
                  {
                    name: "resizeImage:50",
                    label: "50% page width",
                    value: "50",
                  },
                  {
                    name: "resizeImage:75",
                    label: "75% page width",
                    value: "75",
                  },
                ],
                toolbar: [
                  "imageTextAlternative",
                  "toggleImageCaption",
                  "|",
                  "imageStyle:inline",
                  "imageStyle:wrapText",
                  "imageStyle:breakText",
                  "|",
                  "resizeImage",
                ],
                insert: {
                  integrations: ["url"],
                },
              },
              list: {
                properties: {
                  styles: true,
                  startIndex: true,
                  reversed: true,
                },
              },
              link: {
                decorators: {
                  toggleDownloadable: {
                    mode: "manual",
                    label: "Downloadable",
                    attributes: {
                      download: "file",
                    },
                  },
                },
                addTargetToExternalLinks: true,
                defaultProtocol: "https://",
              },
              mention: {
                feeds: [
                  {
                    marker: "@",
                    feed: [
                      { id: "@cflores", text: "Charles Flores" },
                      { id: "@gjackson", text: "Gerald Jackson" },
                      { id: "@wreed", text: "Wayne Reed" },
                      { id: "@lgarcia", text: "Louis Garcia" },
                      { id: "@rwilson", text: "Roy Wilson" },
                      { id: "@mnelson", text: "Matthew Nelson" },
                      { id: "@rwilliams", text: "Randy Williams" },
                      { id: "@ajohnson", text: "Albert Johnson" },
                      { id: "@sroberts", text: "Steve Roberts" },
                      { id: "@kevans", text: "Kevin Evans" },
                    ],
                    minimumCharacters: 1,
                  },
                  {
                    marker: "#",
                    feed: [
                      "#american",
                      "#asian",
                      "#baking",
                      "#breakfast",
                      "#cake",
                      "#caribbean",
                      "#chinese",
                      "#chocolate",
                      "#cooking",
                      "#dairy",
                      "#delicious",
                      "#delish",
                      "#dessert",
                      "#desserts",
                      "#dinner",
                      "#eat",
                      "#eating",
                      "#eggs",
                      "#fish",
                      "#food",
                      "#foodie",
                      "#foods",
                      "#french",
                      "#fresh",
                      "#fusion",
                      "#glutenfree",
                      "#greek",
                      "#grilling",
                      "#halal",
                      "#homemade",
                      "#hot",
                      "#hungry",
                      "#icecream",
                      "#indian",
                      "#italian",
                      "#japanese",
                      "#keto",
                      "#korean",
                      "#lactosefree",
                      "#lunch",
                      "#meat",
                      "#mediterranean",
                      "#mexican",
                      "#moroccan",
                      "#nom",
                      "#nomnom",
                      "#paleo",
                      "#poultry",
                      "#snack",
                      "#spanish",
                      "#sugarfree",
                      "#sweet",
                      "#sweettooth",
                      "#tasty",
                      "#thai",
                      "#vegan",
                      "#vegetarian",
                      "#vietnamese",
                      "#yum",
                      "#yummy",
                    ],
                  },
                ],
              },
              placeholder: "Type or paste your content here!",
              style: {
                definitions: [
                  {
                    name: "Title",
                    element: "h1",
                    classes: ["document-title"],
                  },
                  {
                    name: "Subtitle",
                    element: "h2",
                    classes: ["document-subtitle"],
                  },
                  {
                    name: "Callout",
                    element: "p",
                    classes: ["callout"],
                  },
                  {
                    name: "Side quote",
                    element: "blockquote",
                    classes: ["side-quote"],
                  },
                  {
                    name: "Needs clarification",
                    element: "span",
                    classes: ["needs-clarification"],
                  },
                  {
                    name: "Wide spacing",
                    element: "span",
                    classes: ["wide-spacing"],
                  },
                  {
                    name: "Small caps",
                    element: "span",
                    classes: ["small-caps"],
                  },
                  {
                    name: "Code (dark)",
                    element: "pre",
                    classes: ["stylish-code", "stylish-code-dark"],
                  },
                  {
                    name: "Code (bright)",
                    element: "pre",
                    classes: ["stylish-code", "stylish-code-bright"],
                  },
                ],
              },
              table: {
                contentToolbar: [
                  "tableColumn",
                  "tableRow",
                  "mergeTableCells",
                  "tableProperties",
                  "tableCellProperties",
                  "toggleTableCaption",
                ],
              },
              ckbox: {
                tokenUrl: CKBOX_TOKEN_URL,
              },
              template: {
                definitions: TEMPLATE_DEFINITIONS,
              },
              menuBar: {
                isVisible: true,
              },
            }}
            data={initialData}
            onReady={(editor) => {
              console.log("Feature-rich editor is ready to use!", editor);
              setEditorInstance(editor);

              // Add word count container if available
              const wordCountPlugin = editor.plugins.get("WordCount");
              if (wordCountPlugin && wordCountPlugin.wordCountContainer) {
                const editorMain = document.querySelector(
                  ".ck.ck-editor__main"
                );
                if (editorMain) {
                  editorMain.appendChild(wordCountPlugin.wordCountContainer);
                }
              }
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </div>
    </>
  );
}
