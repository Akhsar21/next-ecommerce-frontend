import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <svg width="118" height="37" viewBox="0 0 118 37" fill="none">
          <path
            d="M28.4 28.6001C28.7 28.6001 29.1 28.7001 29.3 28.8001C29.6 28.9001 29.8 29.1001 30.1 29.3001C30.3 29.5001 30.5 29.8001 30.6 30.1001C30.7 30.4001 30.8 30.7001 30.8 31.1001C30.8 31.7001 30.5 32.3001 30 32.8001C26.6 35.5001 22.7 36.9001 18.4 36.9001C13.3 36.9001 8.99999 35.1001 5.39999 31.5001C1.79999 27.9001 0 23.6001 0 18.5001C0 13.4001 1.79999 9.10009 5.39999 5.50009C8.99999 1.90009 13.3 0.100098 18.4 0.100098C22.8 0.100098 26.7 1.5001 30.2 4.4001C30.6 4.8001 30.8 5.4001 30.8 6.1001C30.8 6.5001 30.7 6.8001 30.6 7.1001C30.5 7.4001 30.3 7.6001 30.1 7.9001C29.9 8.1001 29.6 8.3001 29.3 8.4001C29 8.5001 28.7 8.6001 28.3 8.6001C27.7 8.6001 27.1 8.4001 26.6 7.9001C25.4 7.0001 24.2 6.30009 22.8 5.80009C21.4 5.30009 19.9 5.1001 18.3 5.1001C14.6 5.1001 11.4 6.4001 8.69998 9.1001C6.09998 11.7001 4.79999 14.9001 4.79999 18.6001C4.79999 22.4001 6.09998 25.5001 8.69998 28.2001C11.3 30.8001 14.5 32.2001 18.3 32.2001C21.5 32.2001 24.3 31.2001 26.8 29.2001C27.4 28.7001 27.9 28.6001 28.4 28.6001Z"
            fill="white"
          />
          <path
            d="M60.0002 24.0001C60.0002 27.6001 58.7002 30.6001 56.2002 33.1001C53.7002 35.6001 50.6002 36.9001 47.1002 36.9001C43.5002 36.9001 40.5002 35.6001 38.0002 33.1001C35.5002 30.6001 34.2002 27.6001 34.2002 24.0001C34.2002 20.4001 35.5002 17.4001 38.0002 14.9001C40.5002 12.4001 43.5002 11.1001 47.1002 11.1001C50.6002 11.1001 53.7002 12.4001 56.2002 14.9001C57.5002 16.2001 58.4002 17.5001 59.0002 19.1001C59.6002 20.5001 60.0002 22.2001 60.0002 24.0001ZM47.1002 15.9001C46.0002 15.9001 44.9002 16.1001 43.9002 16.5001C42.9002 16.9001 42.1002 17.5001 41.3002 18.2001C40.6002 18.9001 40.0002 19.8001 39.6002 20.8001C39.2002 21.8001 39.0002 22.8001 39.0002 23.9001C39.0002 25.0001 39.2002 26.0001 39.6002 27.0001C40.0002 28.0001 40.6002 28.8001 41.3002 29.6001C42.0002 30.3001 42.9002 30.9001 43.9002 31.3001C44.9002 31.7001 45.9002 31.9001 47.1002 31.9001C48.2002 31.9001 49.3002 31.7001 50.2002 31.3001C51.2002 30.9001 52.0002 30.3001 52.8002 29.6001C53.5002 28.9001 54.1002 28.0001 54.5002 27.0001C54.9002 26.0001 55.1002 25.0001 55.1002 23.9001C55.1002 22.8001 54.9002 21.8001 54.5002 20.8001C54.1002 19.8001 53.5002 19.0001 52.8002 18.2001C52.1002 17.5001 51.2002 16.9001 50.2002 16.5001C49.3002 16.1001 48.2002 15.9001 47.1002 15.9001Z"
            fill="white"
          />
          <path
            d="M76.4996 11.1C79.4996 11.1 82.1996 12 84.5996 13.9V2.40001C84.5996 1.70001 84.7996 1.1 85.2996 0.699997C85.7996 0.199997 86.2996 0 86.9996 0C87.6996 0 88.1996 0.199997 88.6996 0.699997C89.1996 1.2 89.3996 1.70001 89.3996 2.40001V23.9C89.3996 27.5 88.0996 30.5 85.5996 33C83.0996 35.5 79.9996 36.8 76.4996 36.8C72.8996 36.8 69.8996 35.5 67.3996 33C64.8996 30.5 63.5996 27.5 63.5996 23.9C63.5996 20.3 64.8996 17.3 67.3996 14.8C69.8996 12.4 72.9996 11.1 76.4996 11.1ZM84.5996 24C84.5996 22.9 84.3996 21.9 83.9996 20.9C83.5996 19.9 82.9996 19.1 82.2996 18.3C81.5996 17.6 80.6996 17 79.6996 16.6C78.6996 16.2 77.6996 16 76.5996 16C75.4996 16 74.3996 16.2 73.3996 16.6C72.3996 17 71.5996 17.6 70.7996 18.3C70.0996 19 69.4996 19.9 69.0996 20.9C68.6996 21.9 68.4996 22.9 68.4996 24C68.4996 25.1 68.6996 26.1 69.0996 27.1C69.4996 28.1 70.0996 28.9 70.7996 29.7C71.4996 30.4 72.3996 31 73.3996 31.4C74.3996 31.8 75.3996 32 76.5996 32C77.6996 32 78.7996 31.8 79.6996 31.4C80.6996 31 81.4996 30.4 82.2996 29.7C82.9996 29 83.5996 28.1 83.9996 27.1C84.3996 26.1 84.5996 25.1 84.5996 24Z"
            fill="white"
          />
          <path
            d="M114.6 36.8001C113.9 36.8001 113.3 36.6001 112.9 36.1001C112.5 35.6001 112.2 35.1001 112.2 34.4001C111.1 35.2001 110 35.8001 108.8 36.2001C107.6 36.6001 106.3 36.8001 105 36.8001C103.4 36.8001 101.8 36.5001 100.4 35.8001C98.9 35.2001 97.7 34.3001 96.6 33.2001C95.5 32.1001 94.7 30.8001 94 29.4001C93.4 27.9001 93 26.4001 93 24.8001V13.4001C93 12.7001 93.2 12.2001 93.7 11.7001C94.2 11.2001 94.7 11.0001 95.4 11.0001C96.1 11.0001 96.6 11.2001 97.1 11.7001C97.6 12.2001 97.8 12.7001 97.8 13.4001V24.8001C97.8 25.8001 98 26.7001 98.4 27.6001C98.8 28.5001 99.3 29.2001 99.9 29.9001C100.6 30.6001 101.3 31.1001 102.2 31.4001C103.1 31.8001 104 32.0001 105 32.0001C106 32.0001 106.9 31.8001 107.8 31.4001C108.7 31.0001 109.4 30.5001 110.1 29.8001C110.8 29.1001 111.3 28.4001 111.7 27.5001C112.1 26.6001 112.3 25.7001 112.3 24.7001V13.3001C112.3 12.6001 112.5 12.1001 113 11.6001C113.5 11.1001 114 10.9001 114.7 10.9001C115.4 10.9001 115.9 11.1001 116.4 11.6001C116.9 12.1001 117.1 12.6001 117.1 13.3001V34.3001C117.1 35.0001 116.9 35.5001 116.4 36.0001C115.9 36.6001 115.3 36.8001 114.6 36.8001ZM109.6 4.20009L105 8.80009C104.6 9.20009 104 9.4001 103.3 9.4001C102.6 9.4001 102 9.20009 101.6 8.70009C101.1 8.20009 100.9 7.70009 100.9 7.00009C100.9 6.30009 101.1 5.8001 101.5 5.4001L106.1 0.800095C106.6 0.300095 107.2 0.100098 107.8 0.100098C108.5 0.100098 109.1 0.300095 109.5 0.800095C110 1.30009 110.2 1.80009 110.2 2.50009C110.3 3.20009 110 3.80009 109.6 4.20009Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.grid}>
        <div>
          <h5>About us</h5>
          <p>Designs products and experience for users.</p>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>hello@codu.ie</li>
            <li>+353 1 4370 914</li>
          </ul>
        </div>
        <address>
          <h5>Address</h5>
          <ul>
            <li>8-9 Marino Mart</li>
            <li>Fairview</li>
            <li>Dublin 3</li>
            <li>D03 P590</li>
          </ul>
        </address>
        <div>
          <h5>Other Links</h5>
          <ul>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
