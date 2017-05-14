export type SymptomType = {
  name: string,
  display: date,
  visible: bool,
};

export type BodyPartType = {
  name: string,
  symptoms: {
    symptom1: SymptomType,
    symptom2: SymptomType,
    symptom3: SymptomType,
    symptom4: SymptomType,
    symptom5: SymptomType,
    symptom6: SymptomType,
    symptom7: SymptomType,
    symptom8: SymptomType,
    symptom9: SymptomType,
    symptom10: SymptomType,
    symptom11: SymptomType,
    symptom12: SymptomType,
  },
  other: string,
  date: date,
}
