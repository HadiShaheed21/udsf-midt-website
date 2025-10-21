# KSU Engineering Materials Portal

A comprehensive website for uploading and managing PDF materials for different engineering disciplines at KSU (KSU University). The website features a blue, green, and white color theme and includes sections for various engineering fields.

## Features

### 🏠 Homepage
- **Hero Section**: Welcome message with call-to-action buttons
- **About Section**: Information about the portal with statistics
- **Sections Grid**: 8 engineering sections (S1-S8) with clickable cards
- **UDSF Section**: College Students Union showcase
- **Responsive Design**: Works on desktop and mobile devices

### 📚 Engineering Sections
The website includes 8 engineering sections:

1. **S1 - Mechanical Engineering** 🔧
   - Thermodynamics, materials science, mechanical systems
   
2. **S2 - Civil Engineering** 🏗️
   - Construction, structural analysis, infrastructure
   
3. **S3 - Computer Science Engineering** 💻
   - Programming, algorithms, software development
   
4. **S4 - Cybersecurity Engineering** 🛡️
   - Security protocols, network protection, digital defense
   
5. **S5 - Electrical Engineering** ⚡
   - Power systems, electronics, electrical circuits
   
6. **S6 - Chemical Engineering** ⚗️
   - Process engineering, chemistry, materials science
   
7. **S7 - Aerospace Engineering** ✈️
   - Aircraft design, propulsion, aerodynamics
   
8. **S8 - Industrial Engineering** 🤖
   - Systems optimization, manufacturing, operations

### 📄 PDF Management
- **Upload PDFs**: Multiple file upload support
- **Download PDFs**: Easy download functionality
- **Delete PDFs**: Remove unwanted materials
- **Search PDFs**: Find specific materials quickly
- **File Information**: Display file size and upload date

### 🎨 Design Features
- **Color Theme**: Blue (#2563eb), Green (#16a34a), and White (#ffffff)
- **Modern UI**: Clean, professional design
- **Responsive**: Mobile-friendly layout
- **Smooth Animations**: Hover effects and transitions
- **Font Awesome Icons**: Professional iconography

## File Structure

```
KSU website midt/
├── index.html              # Main homepage
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript functionality
├── section-script.js       # Section-specific functionality
├── sections/               # Individual section pages
│   ├── s1.html            # Mechanical Engineering
│   ├── s2.html            # Civil Engineering
│   ├── s3.html            # Computer Science Engineering
│   ├── s4.html            # Cybersecurity Engineering
│   ├── s5.html            # Electrical Engineering
│   ├── s6.html            # Chemical Engineering
│   ├── s7.html            # Aerospace Engineering
│   └── s8.html            # Industrial Engineering
└── README.md              # This documentation
```

## How to Use

### For Students
1. **Navigate to Sections**: Click on any engineering section (S1-S8) from the homepage
2. **Upload Materials**: Use the upload form to add PDF files
3. **Download Materials**: Click the download button on any PDF
4. **Search Materials**: Use the search box to find specific files
5. **Manage Files**: Delete unwanted materials as needed

### For Administrators
- All uploaded PDFs are stored in browser localStorage
- Data persists across browser sessions
- Each section maintains its own PDF collection
- Easy to manage and organize materials

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Professional icons
- **Local Storage**: Client-side data persistence

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Features in Detail

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile hamburger menu
- Back button on section pages
- Breadcrumb navigation

### PDF Management
- **File Validation**: Only PDF files accepted
- **Multiple Upload**: Select multiple files at once
- **Progress Feedback**: Success/error notifications
- **File Metadata**: Size, upload date, file type icons

### User Experience
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Accessibility**: Keyboard navigation support
- **Performance**: Optimized for fast loading

## Customization

### Colors
The website uses CSS custom properties for easy color customization:
```css
:root {
    --primary-blue: #2563eb;
    --secondary-blue: #1d4ed8;
    --primary-green: #16a34a;
    --secondary-green: #15803d;
    --white: #ffffff;
}
```

### Adding New Sections
1. Create new HTML file in `sections/` folder
2. Add section data to `sectionData` object in `script.js`
3. Update navigation and grid as needed

## Future Enhancements

- **Server Integration**: Backend API for persistent storage
- **User Authentication**: Login system for different user types
- **File Categories**: Organize PDFs by topics or courses
- **Comments System**: Allow students to comment on materials
- **Version Control**: Track changes to uploaded files
- **Analytics**: Usage statistics and popular materials

## Support

For technical support or questions about the KSU Engineering Portal, please contact the development team or refer to the UDSF (University Department Students Federation) for assistance.

---

**Developed for KSU Engineering Students**  
*Empowering education through technology*
