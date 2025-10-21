# 📚 How to Add PDFs to Your Website

## 📁 **Folder Structure Created:**

```
KSU website midt/
├── pdfs/
│   ├── mechanical/           # For Mechanical Engineering PDFs
│   ├── civil/               # For Civil Engineering PDFs
│   ├── computer-science/    # For Computer Science PDFs
│   ├── electrical/          # For Electrical Engineering PDFs
│   ├── electronics/         # For Electronics Engineering PDFs
│   ├── electronics-communication/ # For ECE PDFs
│   ├── data-science/        # For Data Science PDFs
│   └── cybersecurity/       # For Cybersecurity PDFs
```

## 🎯 **Where to Add PDFs in the Code:**

### **Location 1: HTML Files**
**Files:** `sections/s1.html`, `sections/s2.html`, etc.
**Lines:** 65-112 (Materials Section)

### **Location 2: PDF Paths**
Each PDF link follows this pattern:
```html
<a href="pdfs/[folder-name]/[pdf-filename].pdf" class="btn btn-primary" download>
```

## 📝 **Step-by-Step Instructions:**

### **Step 1: Add Your PDF Files**
1. Place your PDF files in the appropriate folder:
   - **Mechanical Engineering PDFs** → `pdfs/mechanical/`
   - **Civil Engineering PDFs** → `pdfs/civil/`
   - **Computer Science PDFs** → `pdfs/computer-science/`
   - **Electrical Engineering PDFs** → `pdfs/electrical/`
   - **Electronics Engineering PDFs** → `pdfs/electronics/`
   - **ECE PDFs** → `pdfs/electronics-communication/`
   - **Data Science PDFs** → `pdfs/data-science/`
   - **Cybersecurity PDFs** → `pdfs/cybersecurity/`

### **Step 2: Update HTML Files**
For each section (s1.html, s2.html, etc.), replace the PDF cards with your actual PDFs:

```html
<!-- Example for Mechanical Engineering (s1.html) -->
<div class="material-card">
    <div class="material-icon">
        <i class="fas fa-file-pdf"></i>
    </div>
    <h4>Your PDF Title</h4>
    <p>Description of your PDF content</p>
    <a href="pdfs/mechanical/your-pdf-filename.pdf" class="btn btn-primary" download>
        <i class="fas fa-download"></i> Download
    </a>
</div>
```

### **Step 3: Update All Sections**
Repeat the same process for all 8 sections:

- **S1 (Mechanical)** → `sections/s1.html`
- **S2 (Civil)** → `sections/s2.html`
- **S3 (Computer Science)** → `sections/s3.html`
- **S4 (Electrical)** → `sections/s4.html`
- **S5 (Electronics)** → `sections/s5.html`
- **S6 (ECE)** → `sections/s6.html`
- **S7 (Data Science)** → `sections/s7.html`
- **S8 (Cybersecurity)** → `sections/s8.html`

## 🔧 **Scaling the Website:**

### **Option 1: Add More PDFs to Existing Sections**
Simply add more `<div class="material-card">` blocks in each section.

### **Option 2: Add More Engineering Sections**
1. Create new HTML files: `sections/s9.html`, `sections/s10.html`, etc.
2. Add new cards to `index.html` in the sections grid
3. Create new PDF folders: `pdfs/aerospace/`, `pdfs/chemical/`, etc.

### **Option 3: Add Categories Within Sections**
You can organize PDFs by topics within each section:
```
pdfs/mechanical/
├── thermodynamics/
├── materials-science/
├── machine-design/
└── fluid-mechanics/
```

## 📋 **Example: Adding a New PDF**

1. **Add PDF file:** `pdfs/mechanical/advanced-thermodynamics.pdf`
2. **Update HTML:** Add this code in `sections/s1.html`:

```html
<div class="material-card">
    <div class="material-icon">
        <i class="fas fa-file-pdf"></i>
    </div>
    <h4>Advanced Thermodynamics</h4>
    <p>Advanced concepts in thermodynamics and heat transfer</p>
    <a href="pdfs/mechanical/advanced-thermodynamics.pdf" class="btn btn-primary" download>
        <i class="fas fa-download"></i> Download
    </a>
</div>
```

## 🎨 **Customization Options:**

### **Change PDF Icons:**
```html
<i class="fas fa-file-pdf"></i>  <!-- PDF icon -->
<i class="fas fa-book"></i>      <!-- Book icon -->
<i class="fas fa-file-alt"></i>  <!-- Document icon -->
```

### **Add File Size Information:**
```html
<p>Advanced concepts in thermodynamics and heat transfer<br>
<small>File size: 2.5 MB</small></p>
```

### **Add Upload Date:**
```html
<p>Advanced concepts in thermodynamics and heat transfer<br>
<small>Uploaded: January 2024</small></p>
```

## 🚀 **Quick Start:**

1. **Copy your PDF files** to the appropriate folders
2. **Update the HTML files** with your PDF information
3. **Test the downloads** by clicking the download buttons
4. **Customize the descriptions** to match your content

## 📞 **Need Help?**

- Check the folder structure matches your PDF locations
- Ensure PDF filenames match the href attributes
- Use lowercase filenames with hyphens (e.g., `machine-design.pdf`)
- Test each download link to ensure it works

---

**Your website is now ready to scale with unlimited PDFs!** 🎉
