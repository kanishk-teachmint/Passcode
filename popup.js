document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const strengthIndicator = document.getElementById('strengthIndicator');
    const generateButton = document.getElementById('generateButton');
    const generatedPassword = document.getElementById('generatedPassword');
  
    // Function to check password strength
    function checkPasswordStrength(password) {
      let strength = 0;
      const minLength = 8; // Minimum length requirement
      const minUpperCase = 1; // Minimum number of uppercase letters
      const minLowerCase = 1; // Minimum number of lowercase letters
      const minNumbers = 1; // Minimum number of numeric characters
      const minSymbols = 1; // Minimum number of special characters
    
      // Check length
      if (password.length >= minLength) {
        strength += 1;
      }
    
      // Check uppercase letters
      const upperCaseRegex = /[A-Z]/g;
      if ((password.match(upperCaseRegex) || []).length >= minUpperCase) {
        strength += 1;
      }
    
      // Check lowercase letters
      const lowerCaseRegex = /[a-z]/g;
      if ((password.match(lowerCaseRegex) || []).length >= minLowerCase) {
        strength += 1;
      }
    
      // Check numbers
      const numbersRegex = /[0-9]/g;
      if ((password.match(numbersRegex) || []).length >= minNumbers) {
        strength += 1;
      }
    
      // Check symbols
      const symbolsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=/]/g;
      if ((password.match(symbolsRegex) || []).length >= minSymbols) {
        strength += 1;
      }
    
      // Adjust strength based on complexity
      if (strength === 5) {
        return 'Very Strong';
      } else if (strength === 4) {
        return 'Strong';
      } else if (strength === 3) {
        return 'Medium';
      } else if (strength === 2) {
        return 'Weak';
      } else {
        return 'Very Weak';
      }
    }
    
  
    // Function to generate a random password
    function generatePassword(length) {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }
  
    // Event listener for check button
    document.getElementById('checkButton').addEventListener('click', function() {
      const password = passwordInput.value;
      const strength = checkPasswordStrength(password);
      strengthIndicator.textContent = `Password Strength: ${strength}`;
    });
  
    // Event listener for generate button
    generateButton.addEventListener('click', function() {
      const length = 12; // Change length as needed
      const newPassword = generatePassword(length);
      generatedPassword.textContent = `Generated Password: ${newPassword}`;
    });
  });
  