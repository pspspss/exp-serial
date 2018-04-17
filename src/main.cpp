#include <Arduino.h>
#include <Bounce2.h>

#define LED_PIN	8
#define BUTTON_PIN 9

int led = LOW;
Bounce bouncer = Bounce(); 

void setup()
{
  pinMode(LED_PIN, OUTPUT);

  pinMode(BUTTON_PIN, INPUT);
  digitalWrite(BUTTON_PIN, LOW);

  bouncer.attach(BUTTON_PIN);
  bouncer.interval(20);

  Serial.begin(9600);
}

void loop()
{
  if (Serial.available() || bouncer.update()) {
    if (
      Serial.read() == 'l' ||
      bouncer.rose()
    ) {
      led = !led;
    }
    Serial.print(led);
  }
  digitalWrite(LED_PIN, led);
}