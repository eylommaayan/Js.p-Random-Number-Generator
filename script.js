// תפיסת אלמנט המספר מתוך ה-HTML לפי הקלאס number
const number = document.querySelector(".number");

// תפיסת כפתור החישוב מתוך ה-HTML לפי הקלאס generate
const btn = document.querySelector(".generate");

// הגדרת פונקציית חץ שמייצרת מספר רנדומלי ומציגה אותו על המסך
const generateNumber = () => {
  // Math.random מייצר מספר עשרוני בין 0 ל-1 (לא כולל 1)
  // הכפלה ב-100 והוספת 1 נותנת טווח של 1 עד 100
  // Math.floor מעגל את התוצאה כלפי מטה למספר שלם
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  // הזרקת המספר השלם שנוצר לתוך אלמנט ה-HTML שנבחר קודם לכן
  number.innerHTML = randomNumber;
};

// האזנה לאירוע לחיצה (click) על הכפתור והפעלת הפונקציה בעת לחיצה
btn.addEventListener("click", generateNumber);

// קריאה לפונקציה מיד עם טעינת הדף כדי שיוצג מספר ראשוני ולא 0
generateNumber();