# 🚀 Device CRM + Inventory Management Dashboard

### 🔗 Live Project
**Vercel Deployment**: [https://janitri-admin-dashboard.vercel.app/](https://janitri-admin-dashboard.vercel.app/)  
**GitHub Repo**: [https://github.com/RjRishuSty/Janitri_Admin_Dashboard](https://github.com/RjRishuSty/Janitri_Admin_Dashboard)

---

## 📄 Project Description

A responsive and full-featured admin dashboard for managing medical devices across multiple facilities. This app allows tracking device inventory, installations, service visits, AMC/CMC contract statuses, and maintaining complete CRM history, including training and alerts.

---

## 🛠️ Tech Stack

- ⚛️ **ReactJS** — Component-based frontend framework
- 📦 **Redux Toolkit** — Efficient state management
- 🎨 **Material UI** — UI components library (v7)
- 🔡 **@fontsource/nunito** — Custom MUI font family
- 🧩 **MUI Icons** — Predefined icon sets for consistent UI
- 🧠 **JavaScript (ES6+)** — Logic and component interactivity
- 💾 **localStorage** — To persist mock data (no backend)
- 🎀 **SCSS Modules** — For component-level styling

---

## 📦 Core Features / Modules

### 1. 🧮 Device Inventory Dashboard
- List all devices with their type, ID, facility name, status (Online/Offline/Maintenance), battery %, last installation/service dates, AMC/CMC status

### 2. ⚙️ Installation & Training Module
- Log new installations, upload unboxing photos, checklists, and training form submission

### 3. 🧾 Service Visit Logs
- Add and view visit records: date, engineer name, purpose (Preventive/Breakdown), visit notes, photo or PDF attachments

### 4. 📆 AMC/CMC Tracker
- Track contract start/end dates, show upcoming expiry alerts, and export AMC reports in CSV

### 5. 🚨 Alerts & Photo Logs
- Photo uploads for devices and issue alerts during installation or maintenance

---

## ✨ Optional Enhancements

- 🔍 QR Code Scanner for quick device identification  
- 🧑‍🔧 Role-based views (Admin / Technician)  
- 💡 Theme Switcher (Light / Dark mode)  
- 📥 CSV export utility  
- 💾 Mock data persistence using **localStorage**

---

## 📂 How to Run This Project Locally

```bash
# Clone the repository
git clone https://github.com/RjRishuSty/Janitri_Admin_Dashboard.git

# Navigate to the project directory
cd Janitri_Admin_Dashboard

# Install dependencies
npm install

# Start the development server
npm start
