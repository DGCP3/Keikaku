function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Project</h1>
      <p>This is the project page</p>
      {params.id}
    </div>
  );
}

export default ProjectPage;
