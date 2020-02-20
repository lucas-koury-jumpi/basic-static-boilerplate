# Site ANY
**stack**: html | js | sass (scss) 
### Dependencias
-  **node-sass**: Fornece um compilador para sass e scss;
-  **cassnano**: Minificador css;
-  **autoprefixer**: Insere prefixos especificos de browsers automaticamente (configuração em 'browserslist' no package.json);
-  **gulp**: Pipeline de automação para as dependencias acima
-  **gulp-sass, gulp-postcss**: Possibilita a ultilização das dependencias acima no Gulp;
-  **gulp-rename**: Utilizado para reanomear arquivos no Gulp facilmente;
-  **gulp-imagemin**: Integra o gulp com diversos processadres de imagem (descritos abaixo);
-  **imagemin-jpegtran**: Compressão de arquivo JPEG;
-  **imagemin-pngquant**: Compressão de arquivos PNG;
-  **imagemin-svgo**: Compressão de arquivos SVG
-  **express**: Utilizado para automação e ci;

### Comandos

**`$ npm install`**

O gulp está sendo utilizado para:
- Compilar, prefixar e minificar o scss e comprimir as imagens para produção:
--**`$ npm run build`** || **`$ npx gulp`**
- Assistir e compilar o scss automaticamente durante o desenvolvimento:
--**`$ npm run watch`** || **`$ npx gulp watch`**
- Somente compilar, prefixar e minificar o scss:
--**`$ npm run comp_sass`** || **`$ npx gulp comp_sass`**
- Somente comprimir as imagens
--**`$ npm run comp_img`** || **`$ npx gulp comp_img`**
- Se for necessário gerar o css puro:
--**`$ npx gulp css`**;
---:: note que o index.html estará chamando a versão minificada:  */public/styles/style.min.css*