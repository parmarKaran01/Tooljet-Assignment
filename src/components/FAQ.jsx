import { Avatar, AvatarGroup, Button, Card, Container } from "@mui/material";
import { QNA } from "./QNA";
import QuestionComponent from "./QuestionComponent";
export default function FAQ() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center mt-12">
      <h2 className="text-4xl text-center mt-3 font-medium px-[10vw] lg:w-5/6 sm:w-[95%] sm:text-3xl">
        Frequently asked questions
      </h2>
      <p className="lg:text-xl text-[#667085] mt-2 w-[90%] text-base">
        Everything you need to know about the product and billing.
      </p>

      <Container>
        <div className="flex flex-col items-baseline gap-3 mt-6">
          {QNA.map((item, index) => {
            return <QuestionComponent data={item} key={index} />;
          })}
        </div>
      </Container>

      <div className="w-[90%] shadow-sm bg-[#F9FAFB] flex flex-col items-center justify-center gap-4 py-16 my-4">
        <AvatarGroup children={[<Avatar />, <Avatar />]} />

        <h2 className="text-2xl">Still have questions?</h2>

        <p className="text-[#667085]">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>

        <Button
            variant="contained"
            style={{
              backgroundColor: "#7F56D9",
              height: "45px",
            }}
          >
            Get in touch
          </Button>
      </div>
    </div>
  );
}
