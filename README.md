# Product Management App

A React Native mobile application for managing product inventory with features to add, view, and delete products.

## Features

- ✅ Add new products with details (Name, Category, Price, Quantity, Serial Number)
- ✅ View all products in a scrollable list
- ✅ Delete products from inventory
- ✅ Real-time data synchronization with backend
- ✅ Clean and intuitive UI

## Tech Stack

- **React Native** - Mobile framework
- **Axios** - HTTP client for API calls
- **Node.js Backend** - REST API (assumed)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)
- Backend API server running

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure API endpoint**
   
   Create `utils/config.js` from the template:
   ```bash
   cp utils/config.template.js utils/config.js
   ```
   
   Then edit `utils/config.js` and update with your local IP address:
   ```javascript
   export const config = {
       url: 'http://YOUR_LOCAL_IP:4000'
   }
   ```
   
   **Finding your local IP:**
   - **Windows**: Open CMD and run `ipconfig`, look for IPv4 Address
   - **Mac/Linux**: Open Terminal and run `ifconfig` or `ip addr`
   - **Android Emulator**: Use `http://10.0.2.2:4000`

4. **Start the backend server**
   ```bash
   # Navigate to your backend directory and start the server
   npm start
   ```

5. **Run the app**
   
   For Android:
   ```bash
   npx react-native run-android
   ```
   
   For iOS:
   ```bash
   npx react-native run-ios
   ```

## Project Structure

```
├── components/
│   ├── Button.js          # Reusable button component
│   └── EditText.js        # Reusable text input component
├── screens/
│   └── HomeScreen.js      # Main screen with product management
├── services/
│   └── product.js         # API service functions
├── utils/
│   ├── config.js          # API configuration (not committed)
│   └── config.template.js # Template for config file
└── App.js                 # Root component
```

## API Endpoints

The app expects the following API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/product/all` | Fetch all products |
| POST | `/product/add` | Add a new product |
| DELETE | `/product/delete` | Delete a product by ID |

### Request/Response Format

**Add Product (POST `/product/add`)**
```json
Request:
{
  "name": "iPhone 15",
  "category": "Mobile",
  "price": "49000.00",
  "quantity": 2,
  "serial_no": "IP09M15"
}

Response:
{
  "status": "success",
  "message": "Product added successfully"
}
```

**Get All Products (GET `/product/all`)**
```json
Response:
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "iPhone 15",
      "category": "Mobile",
      "price": "49000.00",
      "quantity": 2,
      "serial_no": "IP09M15"
    }
  ]
}
```

**Delete Product (DELETE `/product/delete`)**
```json
Request:
{
  "id": 1
}

Response:
{
  "status": "success",
  "message": "Product deleted successfully"
}
```

## Usage

1. **Add a Product:**
   - Fill in all the fields (Name, Category, Price, Quantity, Serial No)
   - Tap the "Save" button
   - Product will be added and the list will refresh automatically

2. **View Products:**
   - All products are displayed in a scrollable list
   - Each item shows the product name and serial number

3. **Delete a Product:**
   - Tap the "DELETE" button on any product card
   - Confirm the deletion
   - Product will be removed and the list will refresh

## Troubleshooting

### Network Error
- Ensure your backend server is running
- Check that your `config.js` has the correct IP address
- Make sure your device/emulator is on the same network as your backend
- For Android emulator, use `10.0.2.2` instead of `localhost`

### Products Not Showing
- Check console logs for any errors
- Verify the backend is returning data in the correct format
- Ensure the API endpoint `/product/all` is working

### Build Errors
```bash
# Clean the build
cd android && ./gradlew clean && cd ..
# or for iOS
cd ios && pod install && cd ..

# Restart Metro bundler
npx react-native start --reset-cache
```

## Configuration Files Not to Commit

Make sure `.gitignore` includes:
```
# Config
utils/config.js

# Environment
.env
.env.local

# Dependencies
node_modules/

# Build
android/app/build/
ios/build/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add product editing functionality
- [ ] Implement search and filter
- [ ] Add product images
- [ ] Implement user authentication
- [ ] Add data validation
- [ ] Offline mode with local storage
- [ ] Export data to CSV/Excel

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Project Link: [https://github.com/yourusername/product-management-app](https://github.com/yourusername/product-management-app)

## Acknowledgments

- React Native Documentation
- Axios Documentation
- React Native Community
